import {
  EnvironmentType,
  GitHubActionsWorkflowJob,
  GitHubRunnerOS,
  PackageManager,
} from '@srclaunch/types';
import { checkout } from './steps/actions/checkout';
import { setupNode } from './steps/actions/setup-node';
import { uploadArtifact } from './steps/actions/upload-artifact';
import { enableCorepack } from './steps/node/enable-corepack';
import { installDependencies } from './steps/node/install';
import { runTests } from './steps/testing/run-tests';
import { uploadToCoveralls } from './steps/testing/upload-to-coveralls';
import { enableYarnCache } from './steps/yarn/cache';
import { setYarnVersion } from './steps/yarn/version';

export const test = ({
  coverallsToken,
  packageManager = PackageManager.Yarn,
}: {
  coverallsToken?: string;
  packageManager?: PackageManager;
} = {}): GitHubActionsWorkflowJob => ({
  name: 'Test package',
  needs: ['metadata', 'build'],
  runsOn: GitHubRunnerOS.UbuntuLatest,
  steps: [
    checkout(),
    setupNode({ packageManager }),
    enableCorepack(),
    setYarnVersion('stable'),
    enableYarnCache(),
    installDependencies({
      environmentType: EnvironmentType.CI,
      packageManager,
    }),
    runTests({
      packageManager,
    }),
    uploadArtifact({
      name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-test-coverage.json',
      paths: ['coverage-summary.json'],
    }),
    uploadToCoveralls({ token: coverallsToken }),
  ],
});

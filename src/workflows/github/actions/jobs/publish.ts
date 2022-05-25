import {
  EnvironmentType,
  GitHubActionsWorkflowJob,
  GitHubRunnerOS,
  PackageManager,
} from '@srclaunch/types';
import { downloadArtifact } from './steps/actions/download-artifact';
import { setupNode } from './steps/actions/setup-node';
import { enableCorepack } from './steps/node/enable-corepack';
import { publishPackage } from './steps/package/publish';
import { setYarnVersion } from './steps/yarn/version';

export const publish = ({
  authToken,
  packageManager = PackageManager.NPM,
  scope,
}: {
  authToken: string;
  packageManager?: PackageManager;
  scope?: string;
}): GitHubActionsWorkflowJob => ({
  name: 'Publish package',
  needs: ['metadata', 'build', 'test'],
  runsOn: GitHubRunnerOS.UbuntuLatest,
  steps: [
    downloadArtifact({
      name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-${{ needs.env-vars.outputs.version }}-build',
    }),
    setupNode({ packageManager }),
    enableCorepack(),
    setYarnVersion('stable'),
    publishPackage({ authToken, packageManager, scope }),
  ],
});

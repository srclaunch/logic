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
import { buildProject } from './steps/package/build';
import { enableYarnCache } from './steps/yarn/cache';
import { setYarnVersion } from './steps/yarn/version';

export const build = ({
  branch,
  environmentType = EnvironmentType.CI,
  packageManager = PackageManager.Yarn,
  repository,
  version,
}: {
  branch?: string;
  environmentType?: EnvironmentType;
  packageManager?: PackageManager;
  repository?: {
    name: string;
    owner: string;
  };
  version?: string;
} = {}): GitHubActionsWorkflowJob => ({
  name: 'Build package',
  needs: ['metadata'],
  runsOn: GitHubRunnerOS.UbuntuLatest,
  steps: [
    checkout(),
    setupNode({ packageManager }),
    enableCorepack(),
    setYarnVersion('stable'),
    enableYarnCache(),
    installDependencies({
      environmentType,
      packageManager,
    }),
    buildProject({
      packageManager,
    }),
    uploadArtifact({
      name: `${repository.owner}-${repository.name}-${branch}-${version}-build`,
      paths: ['dist', 'package.json', 'README.md', 'LICENSE.md', 'yarn.lock'],
    }),
  ],
});

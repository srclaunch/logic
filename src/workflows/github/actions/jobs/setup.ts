import { GitHubRunnerOS } from '@srclaunch/types';
import { checkout } from './steps/actions/checkout';
import { getPackageVersion } from './steps/package/version';
import { getBranchName } from './steps/repository';

export const setup = () => ({
  name: 'Get package metadata',
  outputs: {
    branch: '${{ steps.get-branch.outputs.name }}',
    version: '${{ steps.get-version.outputs.tag }}',
  },
  runsOn: GitHubRunnerOS.UbuntuLatest,
  steps: [checkout(), getBranchName(), getPackageVersion()],
});

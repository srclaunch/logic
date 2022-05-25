import { GitHubActionsWorkflowStep, PackageManager } from '@srclaunch/types';
import { PackageManagers } from '../../../packageManagers';

export const runTests = ({
  args = '',
  coverage = true,
  packageManager = PackageManager.NPM,
}: {
  args?: string;
  coverage?: boolean;
  packageManager?: PackageManager;
}): GitHubActionsWorkflowStep => ({
  name: `Run tests${coverage ? ' and collect test coverage' : ''}`,
  run: PackageManagers[packageManager].commands.test({ args, coverage }),
});

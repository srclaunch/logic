import { GitHubActionsWorkflowStep, PackageManager } from '@srclaunch/types';
import { PackageManagers } from '../../../packageManagers';

export const buildProject = ({
  packageManager,
}: {
  packageManager?: PackageManager;
}): GitHubActionsWorkflowStep => ({
  name: 'Build project',
  run: `${PackageManagers[packageManager].commands.run('build')}`,
});

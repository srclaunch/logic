import { GitHubActionsWorkflowStep, PackageManager } from '@srclaunch/types';

export const setupNode = ({
  packageManager = PackageManager.NPM,
  cache = true,
  nodeVersion,
}: {
  packageManager?: PackageManager;
  cache?: boolean;
  nodeVersion?: 14 | 16 | 18;
} = {}): GitHubActionsWorkflowStep => ({
  name: `Use Node.js ${nodeVersion}.x`,
  uses: 'actions/setup-node@v3',
  with: {
    cache: cache ? packageManager : undefined,
    'node-version': `${nodeVersion}.x`,
  },
});

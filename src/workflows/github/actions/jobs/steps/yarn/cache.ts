import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const enableYarnCache = (): GitHubActionsWorkflowStep => ({
  name: 'Enable Yarn cache',
  uses: 'actions/cache@v3',
  with: {
    path: [
      '.yarn/cache',
      '.yarn/patches',
      '.yarn/plugins',
      '.yarn/releases',
      '.yarn/sdks',
      '.yarn/versions',
    ],
    key: '${{ runner.os }}-yarn-${{ hashFiles("**/yarn.lock") }}',
    'restore-keys': ['${{ runner.os }}-yarn-'],
  },
});

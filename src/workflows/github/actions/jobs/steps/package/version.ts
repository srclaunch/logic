import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const getPackageVersion = (): GitHubActionsWorkflowStep => ({
  name: 'Get version from package.json',
  id: 'get-version',
  run: ['echo "::set-output name=tag::$(jq -r .version package.json)"'],
});

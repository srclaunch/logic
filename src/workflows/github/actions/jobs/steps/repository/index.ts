import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const getBranchName = (): GitHubActionsWorkflowStep => ({
  name: 'Get branch name',
  id: 'get-branch',
  run: ['echo "::set-output name=name::${GITHUB_REF#refs/heads/}"'],
});

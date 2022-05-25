import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const uploadToCoveralls = ({
  token,
}: {
  token: string;
}): GitHubActionsWorkflowStep => ({
  name: 'Upload test coverage results',
  uses: 'coverallsapp/github-action@master',
  with: {
    'github-token': token,
  },
});

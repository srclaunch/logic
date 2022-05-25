import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const downloadArtifact = ({
  name,
}: {
  name: string;
}): GitHubActionsWorkflowStep => ({
  name: 'Download production build artifact',
  uses: 'actions/download-artifact@v3',
  with: {
    name,
  },
});

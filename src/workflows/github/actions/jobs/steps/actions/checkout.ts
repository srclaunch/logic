import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const checkout = (): GitHubActionsWorkflowStep => ({
  name: 'Checkout',
  uses: 'actions/checkout@v3',
});

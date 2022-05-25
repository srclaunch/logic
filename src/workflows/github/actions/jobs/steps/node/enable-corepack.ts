import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const enableCorepack = (): GitHubActionsWorkflowStep => ({
  name: 'Enable corepack',
  run: 'corepack enable',
});

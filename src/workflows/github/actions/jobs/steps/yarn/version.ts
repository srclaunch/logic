import { GitHubActionsWorkflowStep } from '@srclaunch/types';

export const setYarnVersion = (version: string): GitHubActionsWorkflowStep => ({
  name: `Use Yarn verson ${version}`,
  run: `yarn set version ${version}`,
});

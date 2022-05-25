import { Action } from '../index';

export class GetBranch extends Action {
  id = 'get-branch';
  description = 'Get branch name';
  runEnvironment = {
    GITHUB_REF: '#refs/heads/',
  };
  output: { name?: string } = undefined;
}

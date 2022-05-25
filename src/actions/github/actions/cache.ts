import { GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class GitHubActionCache extends Action {
  action = GitHubAction.Checkout;
  context: {
    path: string[];
    key?: string;
    restoreKeys?: string[];
  } = undefined;
  id = 'cache';
  description = 'Checkout';

  constructor({
    path,
    key,
    restoreKeys,
  }: {
    path: string[];
    key?: string;
    restoreKeys?: string[];
  }) {
    super();

    this.context = {
      path,
      key,
      restoreKeys,
    };
  }
}

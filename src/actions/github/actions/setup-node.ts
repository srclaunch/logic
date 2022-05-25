import { GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class SetupNode extends Action {
  action = GitHubAction.SetupNode;
  context = {};
  id = 'setup-node';
  description = 'Setup Node';

  constructor(
    {
      cache,
      nodeVersion,
    }: {
      cache?: string;
      nodeVersion?: string;
    } = {
      cache: 'yarn',
      nodeVersion: '16.x',
    },
  ) {
    super();

    this.context = {
      cache: cache ?? 'yarn',
      nodeVersion: nodeVersion ?? '16.x',
    };
  }
}

import { GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class EnableCorepack extends Action {
  id = 'enable-corepack';
  description = 'Enable corepack';
  shell = 'corepack enable';
}

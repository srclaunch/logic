import { GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class SetYarnVersionStable extends Action {
  id = 'set-yarn-version-stable';
  description = 'Enable latest Yarn version';
  shell = 'yarn set version stable';
}

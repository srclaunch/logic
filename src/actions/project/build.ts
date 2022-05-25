import { Action } from '..';

export class BuildProject extends Action {
  name = 'build-project';
  description = 'Builds project';
  shell = 'srclaunch build';
}

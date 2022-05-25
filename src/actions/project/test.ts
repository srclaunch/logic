import { Action } from '..';

export class RunTests extends Action {
  name = 'test';
  description = 'Runs tests';
  shell = 'srclaunch test';
}

export class CollectTestCoverage extends Action {
  name = 'Collect test coverage';
  description = 'Collects test coverage';
  shell = 'srclaunch coverage';
}

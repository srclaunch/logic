import { Action } from '..';

export class YarnPublish extends Action {
  id = 'yarn-publish';
  description = 'Publish package';
  shell = 'yarn npm publish';
}

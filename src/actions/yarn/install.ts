import { Action } from '..';

export class YarnInstall extends Action {
  id = 'yarn-install';
  description = 'Install dependencies';
  environment: {};
  shell = 'yarn install';

  constructor({ environment }: { environment?: Record<string, string> } = {}) {
    super();

    this.environment = environment;
  }
}

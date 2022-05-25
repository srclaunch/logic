import { Action } from '../../index';

export class GetPackageVersion extends Action {
  id = 'get-package-version';
  description = 'Get package.json version';
  output: { version: string } = undefined;
  shell = 'jq -r .version package.json';
}

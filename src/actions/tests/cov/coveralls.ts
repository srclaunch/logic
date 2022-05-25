import { Action } from '../..';

export class UploadCoverageToCoveralls extends Action {
  id = 'upload-coverage-to-coveralls';
  name = 'Upload coverage to Coveralls';
  use = 'coverallsapp/github-action@master';
  context = {};

  constructor({ token }: { token: string }) {
    super();

    this.context = {
      'github-token': token,
    };
  }
}

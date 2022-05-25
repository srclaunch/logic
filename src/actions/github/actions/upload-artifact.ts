import { File, GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class GitHubActionUploadArtifact extends Action {
  action = GitHubAction.UploadArtifact;
  id = 'upload-artifact';
  description = 'Upload artifact';
  fileName: string;
  paths?: string[];
  path?: string;

  constructor({
    name,
    paths,
    path,
  }: {
    name?: string;
    paths?: string[];
    path?: string;
  }) {
    super();
    this.fileName = name;
    this.paths = paths;
    this.path = path;
  }
}

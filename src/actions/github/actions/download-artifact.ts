import { File, GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class GitHubActionDownloadArtifact extends Action {
  action = GitHubAction.DownloadArtifact;
  id = 'download-artifact';
  description = 'Download artifact';
  fileName: string;
  uses = GitHubAction.DownloadArtifact;

  constructor({ name }: { name?: string }) {
    super();
    this.fileName = name;
  }
}

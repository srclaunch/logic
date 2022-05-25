import { writeFile, ensureFile, removeFile } from 'fs-extra';
import { Action } from '..';

export class CreateFileAction extends Action {
  id = 'create-file';
  name = 'Create file';
  description = 'Creates a file';
  path: string = undefined;
  content: string = undefined;

  constructor(path: string, content?: string) {
    super();
    this.path = path;
    this.content = content;
  }

  async run() {
    if (!this.path) {
      throw new Error('File path must be provided');
    }

    if (this.content) {
      try {
        await writeFile(this.path, this.content);
      } catch (err) {
        throw new Error(`Could not write file: ${this.path}`);
      }
    }
  }
}

export class DeleteFileAction extends Action {
  description = 'Deletes a file';
  path: string = undefined;

  constructor(path?: string, content?: string) {
    super();
    this.path = path;
  }

  async run(file?: string) {
    if (!file) {
      throw new Error('File must be provided');
    }

    if (file === '/') {
      throw new Error('Cannot delete root directory');
    }

    try {
      await removeFile(file);
    } catch (err) {
      throw new Error(`Could not delete file: ${file}`);
    }
  }
}

export class EnsureFileExistsAction extends Action {
  description = 'If file does not exist, then this action will create it';
  path: string = undefined;

  constructor(path?: string, content?: string) {
    super();
    this.path = path;
  }

  async run(file?: string) {
    if (!file) {
      throw new Error('File must be provided');
    }

    if (file === '/') {
      throw new Error('Cannot delete root directory');
    }

    try {
      await ensureFile(file);
    } catch (err) {
      throw new Error(`Could not delete file: ${file}`);
    }
  }
}

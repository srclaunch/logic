import { writeFile as fsWriteFile, ensureFile } from 'fs-extra';

export const writeFile = async (path: string, contents?: string) => {
  if (!path) {
    throw new Error('File name must be provided');
  }

  if (contents) {
    try {
      await fsWriteFile(path, contents);
    } catch (err) {
      throw new Error(`Could not write file: ${path}`);
    }
  } else {
    try {
      await ensureFile(path);
    } catch (err) {
      throw new Error(`Could not create file: ${path}`);
    }
  }
};

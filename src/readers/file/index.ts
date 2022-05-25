import { readFile as fsReadFile } from 'fs-extra';

export const readFile = async (path?: string): Promise<string> => {
  if (!path) {
    throw new Error('Path must be provided');
  }

  try {
    return (await fsReadFile(path)).toString();
  } catch (err) {
    throw new Error(`Could not read file: ${path}`);
  }
};

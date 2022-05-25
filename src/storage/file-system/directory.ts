import { mkdirs, ensureDir } from 'fs-extra';

export const createDirectory = async (path?: string) => {
  if (!path) {
    throw new Error('Directory must be provided');
  }

  if (path === '/') {
    throw new Error('Cannot create root directory');
  }

  try {
    await mkdirs(path);
  } catch (err) {
    throw new Error(`Could not create directory: ${path}`);
  }
};

export const ensureDirectoryExists = async (path?: string) => {
  if (!path) {
    throw new Error('Directory must be provided');
  }

  try {
    await ensureDir(path);
  } catch (err) {
    throw new Error(`Could not ensure directory exists: ${path}`);
  }
};

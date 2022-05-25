import fs from 'fs-extra';

export const createDirectory = async (directory: string): Promise<void> => {
  if (!directory) {
    throw new Error('Directory must be provided');
  }

  if (directory === '/') {
    throw new Error('Cannot create root directory');
  }

  try {
    await fs.mkdirs(directory);
  } catch (err) {
    throw new Error(`Could not create directory: ${directory}`);
  }
};

export const deleteDirectory = async (directory: string): Promise<void> => {
  if (!directory) {
    throw new Error('Directory must be provided');
  }

  if (directory === '/') {
    throw new Error('Cannot delete root directory');
  }

  try {
    await fs.remove(directory);
  } catch (err) {
    throw new Error(`Could not delete directory: ${directory}`);
  }
};

export const emptyDirectory = async (directory: string): Promise<void> => {
  if (!directory) {
    throw new Error('Directory must be provided');
  }

  if (directory === '/') {
    throw new Error('Cannot empty root directory');
  }

  try {
    await fs.emptyDir(directory);
  } catch (err) {
    throw new Error(`Could not empty directory: ${directory}`);
  }
};

export const ensureDirectoryExists = async (
  directory: string,
): Promise<void> => {
  if (!directory) {
    throw new Error('Directory must be provided');
  }

  if (directory === '/') {
    throw new Error('Cannot ensure root directory exists');
  }

  try {
    await fs.ensureDir(directory);
  } catch (err) {
    throw new Error(`Could not ensure directory exists: ${directory}`);
  }
};

export const fileExists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }
};

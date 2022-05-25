import fs from 'fs-extra';

export const deleteFile = async (file: string): Promise<void> => {
  if (!file) {
    throw new Error('File must be provided');
  }

  if (file === '/') {
    throw new Error('Cannot delete root directory');
  }

  try {
    await fs.remove(file);
  } catch (err) {
    throw new Error(`Could not delete file: ${file}`);
  }
};

export async function readFile(filePath: string) {
  if (!filePath) {
    throw new Error('File path must be provided');
  }

  try {
    return (await fs.readFile(filePath)).toString();
  } catch (err) {
    throw new Error(`Could not read file: ${filePath}`);
  }
}

export async function writeFile(filePath: string, data: string) {
  if (!filePath) {
    throw new Error('File path must be provided');
  }

  try {
    return await fs.writeFile(filePath, data);
  } catch (err) {
    throw new Error(`Could not write file: ${filePath}`);
  }
}

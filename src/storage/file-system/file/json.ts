import { readFile } from './index';

export const readJSONFile = async (path: string): Promise<any> => {
  if (!path) {
    throw new Error('Path must be provided');
  }

  try {
    const json = await readFile(path);
    return await JSON.parse(json.toString());
  } catch (err) {
    throw new Error(`File ${path} is not valid JSON`);
  }
};

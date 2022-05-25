import Yaml from 'js-yaml';
import { readFile } from './index';

export const readYAMLFile = async (path: string) => {
  if (!path) {
    throw new Error('Path must be provided');
  }

  const yaml = await readFile(path);

  try {
    return await Yaml.load(yaml.toString());
  } catch (err) {
    throw new Error(`File ${path} is not valid YAML`);
  }
};

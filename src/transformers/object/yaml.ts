import Yaml from 'js-yaml';

export const transformObjectToYAML = (obj: Record<string, unknown>): string => {
  const yaml = Yaml.dump(obj);

  return yaml;
};

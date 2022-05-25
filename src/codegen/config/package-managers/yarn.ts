import { transformObjectToYAML } from '../../../transformers/object/yaml';

export enum YarnNodeLinker {
  PnP = 'pnp',
  NodeModules = 'node-modules',
}

export type YarnConfigGeneratorOptions = {
  nodeLinker?: YarnNodeLinker;
};

export async function generateYarnConfig({
  nodeLinker,
}: YarnConfigGeneratorOptions): Promise<string> {
  const yarnRC = {
    nodeLinker: nodeLinker ?? YarnNodeLinker.NodeModules,
  };
  return transformObjectToYAML(yarnRC).toString();
}

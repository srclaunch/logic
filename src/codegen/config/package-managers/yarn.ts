import { transformObjectToYAML } from '../../../transformers/object/yaml';
import { YarnNodeLinker } from '../../../types/codegen/config/package-manager/yarn';

export async function generateYarnConfig({
  nodeLinker,
}: {
  nodeLinker?: YarnNodeLinker;
}): Promise<string> {
  const yarnRC = {
    nodeLinker: nodeLinker ?? YarnNodeLinker.NodeModules,
  };
  return transformObjectToYAML(yarnRC).toString();
}

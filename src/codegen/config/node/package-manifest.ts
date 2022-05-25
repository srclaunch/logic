import { Dependencies, PackageOptions, PackageType } from '@srclaunch/types';

export async function generateNodePackageManifest({
  author,
  dependencies,
  description,
  devDependencies,
  engines,
  exports,
  files,
  license,
  main,
  module,
  name,
  peerDependencies,
  publishConfig,
  scripts,
  type,
  types,
  version,
}: {
  author?: string;
  description?: string;
  dependencies?: Dependencies;
  devDependencies?: Dependencies;
  engines?: {
    node?: string;
    npm?: string;
    yarn?: string;
  };
  exports?: PackageOptions['exports'];
  files?: string[];
  license?: string;
  main?: string;
  module?: string;
  name: string;
  peerDependencies?: Dependencies;
  publishConfig?: Record<string, string>;
  scripts?: Record<string, string>;
  type?: PackageType;
  types?: string;
  version?: string;
}): Promise<string> {
  if (!name) {
    throw new Error('Name is required');
  }

  let exportsProp = {};
  for (const _export of exports ?? []) {
    exportsProp = {
      ...exportsProp,
      [_export.path]: {
        import: _export.import,
        require: _export.require,
      },
    };
  }

  return JSON.stringify(
    {
      name,
      description,
      author,
      license,
      version,
      engines,
      publishConfig,
      type,
      main,
      types,
      files,
      module,
      exports: exportsProp,
      scripts,
      dependencies,
      devDependencies,
      peerDependencies,
    },
    null,
    2,
  );
}

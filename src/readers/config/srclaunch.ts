import { loadConfig } from 'unconfig';
import { SrcLaunchConfig } from '@srclaunch/types';
import { SRCLAUNCH_CONFIG_FILE_NAMES } from '../../constants/config/srclaunch';
import { readYAMLFile } from '../../storage/file-system/file/yaml';

export const loadSrcLaunchConfig = async (): Promise<SrcLaunchConfig> => {
  const { config, sources } = await loadConfig<SrcLaunchConfig>({
    sources: [
      {
        files: SRCLAUNCH_CONFIG_FILE_NAMES,
        // default extensions
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
      },
      {
        files: SRCLAUNCH_CONFIG_FILE_NAMES,
        extensions: ['yml', 'yaml'],
        parser: async path => {
          return await readYAMLFile(path);
        },
      },
      {
        files: 'package.json',
        extensions: [],
        rewrite(cfg: { srclaunch?: SrcLaunchConfig }) {
          return cfg?.srclaunch;
        },
      },
      {
        files: 'vite.config',
        async rewrite(
          cfg:
            | { srclaunch?: SrcLaunchConfig }
            | (() => Promise<
                Record<string, unknown> & { srclaunch?: SrcLaunchConfig }
              >),
        ) {
          const viteConfig = await (typeof cfg === 'function' ? cfg() : cfg);
          return viteConfig?.srclaunch;
        },
      },
    ],
    // if false, the only the first matched will be loaded
    // if true, all matched will be loaded and deep merged
    merge: false,
  });

  return config;
};

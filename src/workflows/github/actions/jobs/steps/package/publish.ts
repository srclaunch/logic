import {
  GitHubActionsWorkflowStep,
  Package,
  PackageManager,
} from '@srclaunch/types';
import { PackageManagers } from '../../../packageManagers';
import { writeFile } from '../fs/write-file';

export function writePackageRegistryPublishConfiguration({
  authToken,
  packageManager,
  scope,
}: {
  authToken?: string;
  packageManager?: PackageManager;
  scope?: string;
}) {
  switch (packageManager) {
    case PackageManager.Yarn:
      return writeFile({
        path: './.yarnrc.yml',
        contents: scope
          ? `npmScopes:
  ${scope}:
    npmRegistryServer: https://registry.npmjs.org
    npmAlwaysAuth: true
    npmAuthToken: ${authToken}`
          : `npmRegistryServer: https://registry.npmjs.org
    npmAlwaysAuth: true
    npmAuthToken: ${authToken}`,
      });
    default:
      return writeFile({
        path: './.npmrc',
        contents: `//registry.npmjs.org/:_authToken=${authToken}`,
      });
  }
}

export const publishPackage = ({
  authToken,
  packageManager,
  scope,
}: {
  authToken?: string;
  packageManager?: PackageManager;
  scope?: string;
}): GitHubActionsWorkflowStep => (
  writePackageRegistryPublishConfiguration({
    authToken,
    packageManager,
    scope,
  }),
  {
    name: 'Publish package',
    run: PackageManagers[packageManager].commands.publish(),
  }
);

import {
  GitHubActionsWorkflowStep,
  PackageManager,
  Environment,
  EnvironmentType,
} from '@srclaunch/types';
import { PackageManagers } from '../../../packageManagers';

export function getNodeEnvEnvironmentVariable(
  environmentType?: EnvironmentType,
) {
  switch (environmentType) {
    case EnvironmentType.CI:
      return 'ci';
    case EnvironmentType.Development:
      return 'development';
    case EnvironmentType.Production:
      return 'production';
  }
}

export function getPackageManagerInstallCommand(
  environmentType?: EnvironmentType,
  packageManager?: PackageManager,
) {
  return PackageManagers[packageManager].commands.install({ environmentType });
}

export const installDependencies = ({
  environmentType,
  packageManager,
}: {
  environmentType?: EnvironmentType;
  packageManager?: PackageManager;
}): GitHubActionsWorkflowStep => ({
  name: 'Install dependencies',
  run: getPackageManagerInstallCommand(environmentType, packageManager),
  env: {
    NODE_ENV: getNodeEnvEnvironmentVariable(environmentType),
  },
});

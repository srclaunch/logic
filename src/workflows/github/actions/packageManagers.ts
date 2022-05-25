import { EnvironmentType, PackageManager } from '@srclaunch/types';

export const PackageManagers = {
  [PackageManager.NPM]: {
    name: 'NPM',
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        environmentType?: EnvironmentType;
      }) => `npm ${environmentType === EnvironmentType.CI ? 'ci' : 'install'}`,
      run: (script?: string) => `npm run ${script}`,
      publish: () => 'npm publish',
      test: ({
        args = '',
        coverage = true,
      }: {
        args?: string;
        coverage?: boolean;
      }) => `npm test${coverage ? ':coverage' : ''} ${args}`,
    },
  },
  [PackageManager.PNPM]: {
    name: 'PNPM',
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        environmentType?: EnvironmentType;
      }) =>
        `pnpm ${
          environmentType === EnvironmentType.CI
            ? 'install --frozen-lockfile'
            : 'install'
        }`,
      publish: () => 'pnpm publish',
      run: (script?: string) => `pnpm ${script}`,
      test: ({
        args = '',
        coverage = true,
      }: {
        args?: string;
        coverage?: boolean;
      }) => `pnpm test${coverage ? ':coverage' : ''} ${args}`,
    },
  },
  [PackageManager.Yarn]: {
    name: 'Yarn',
    commands: {
      install: ({
        environmentType = EnvironmentType.CI,
      }: {
        environmentType?: EnvironmentType;
      }) =>
        `yarn ${
          environmentType === EnvironmentType.CI
            ? 'install --frozen-lockfile'
            : 'install'
        }`,
      publish: () => 'yarn npm publish',
      run: (script?: string) => `yarn ${script}`,
      test: ({
        args = '',
        coverage = true,
      }: {
        args?: string;
        coverage?: boolean;
      }) => `yarn test${coverage ? ':coverage' : ''} ${args}`,
    },
  },
};

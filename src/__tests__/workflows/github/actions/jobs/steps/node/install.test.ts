import { EnvironmentType, PackageManager } from '@srclaunch/types';
import test from 'ava';
import { installDependencies } from '../../../../../../../workflows/github/actions/jobs/steps/node/install';

test('installDependencies()', t => {
  t.deepEqual(installDependencies({ environmentType: EnvironmentType.CI }), {
    name: 'Install dependencies',
    run: 'yarn install --frozen-lockfile',
    env: {
      NODE_ENV: 'ci',
    },
  });

  t.deepEqual(
    installDependencies({
      environmentType: EnvironmentType.CI,
      packageManager: PackageManager.NPM,
    }),
    {
      name: 'Install dependencies',
      run: 'npm ci',
      env: {
        NODE_ENV: 'ci',
      },
    },
  );

  t.pass();
});

import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  RepositoryEvent,
  License,
  Project,
  ProjectType,
  PublishAccess,
  StaticTypingTool,
  TestReporter,
  TestTool,
  UniversalPackage,
  EnvironmentType,
  PackageManager,
} from '@srclaunch/types';
import { build } from './src/workflows/github/actions/jobs/build';
import { publish } from './src/workflows/github/actions/jobs/publish';
import { setup } from './src/workflows/github/actions/jobs/setup';
import { test } from './src/workflows/github/actions/jobs/test';

export default <Project>{
  name: '@srclaunch/logic',
  description:
    'Actions, parsers, generators, transformers and other programming abstractions',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ['unconfig'],
    },
    formats: [BuildFormat.UMD, BuildFormat.ESM],
    library: {
      name: '@srclaunch/logic',
    },
    output: {
      directory: 'dist',
      file: 'index',
    },
    platform: BuildPlatform.Universal,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint],
      staticTyping: [StaticTypingTool.TypeScript],
    },
  },
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: 'https://registry.npmjs.org/',
    },
  },
  requirements: {
    node: '>=16',
    yarn: '>=3.2.0',
    packages: [
      UniversalPackage.JSYaml,
      UniversalPackage.EmailValidator,
      UniversalPackage.PasswordValidator,
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
  repository: {
    workflows: [
      {
        name: 'Publish package to NPM',
        on: {
          [RepositoryEvent.Push]: {
            branches: ['main'],
          },
        },
        jobs: [
          {
            setup: setup(),
            build: build({
              branch: '${{ needs.setup.outputs.branch }}',
              repository: {
                name: '${{ github.event.repository.name }}',
                owner: '${{ github.event.repository.owner.login }}',
              },
              version: '${{ needs.env-vars.outputs.version }}',
            }),
            test: test({ coverallsToken: '${{ secrets.GITHUB_TOKEN }}' }),
            publish: publish({
              authToken: '${{ secrets.NPM_ACCESS_TOKEN }}',
              scope: '${{ github.event.repository.owner.login }}',
            }),
          },
        ],
      },
    ],
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
};

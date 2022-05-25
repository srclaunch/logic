// import { GitHubActionsWorkflow, RepositoryEvent } from '@srclaunch/types';
// import { GetBranch } from '../../actions/github/get-branch';
// import { GetPackageVersion } from '../../actions/package/get-package-version';
// import { Checkout } from '../../actions/github/actions/checkout';
// import { BuildProject } from '../../actions/project/build';
// import { Workflow } from '../../index';
// import { SetupNode } from '../../actions/github/actions/setup-node';
// import { EnableCorepack } from '../../actions/nodejs/enable-corepack';
// import { SetYarnVersionStable } from '../../actions/yarn';
// import { GitHubActionCache } from '../../actions/github/actions/cache';
// import { YarnInstall } from '../../actions/yarn/install';
// import { GitHubActionUploadArtifact } from '../../actions/github/actions/upload-artifact';
// import { CollectTestCoverage, RunTests } from '../../actions/project/test';
// import { UploadCoverageToCoveralls } from '../../actions/tests/cov/coveralls';
// import { GitHubActionDownloadArtifact } from '../../actions/github/actions/download-artifact';
// import { YarnPublish } from '../../actions/yarn/publish';
// import { CreateFileAction } from '../../actions/file-system/file';
// import { ObjectToYamlTransformer } from '../../transformers/objects/yaml';
// import { WorkflowJob } from '..';

// export class PublishWorkflow extends Workflow implements GitHubActionsWorkflow {
//   branch = 'main';
//   on = [RepositoryEvent.Push];
//   jobs = {
//     metadata: new WorkflowJob(),
//     getMetadata: async ({
//       steps = [
//         new Checkout(),
//         {
//           tag: new GetPackageVersion(),
//         },
//         {
//           branch: new GetBranch(),
//         },
//       ],
//     }) => {
//       return {
//         branch: steps['branch'].output.name,
//         version: steps['tag'].output.version,
//       };
//     },
//     build: async ({
//       steps = [
//         new Checkout(),
//         new SetupNode({
//           cache: 'yarn',
//           nodeVersion: '16.x',
//         }),
//         new EnableCorepack(),
//         new SetYarnVersionStable(),
//         new GitHubActionCache({
//           path: [
//             '.yarn/cache',
//             '.yarn/patches',
//             '.yarn/plugins',
//             '.yarn/releases',
//             '.yarn/sdks',
//             '.yarn/versions',
//           ],
//           key: "${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}",
//           restoreKeys: ['${{ runner.os }}-yarn-'],
//         }),
//         new YarnInstall({ environment: { NODE_ENV: 'production' } }),
//         new BuildProject(),
//         new GitHubActionUploadArtifact({
//           name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.get-metadata.outputs.branch }}-${{ needs.get-metadata.outputs.version }}-build',
//           paths: [
//             'dist',
//             'package.json',
//             'README.md',
//             'LICENSE.md',
//             'yarn.lock',
//           ],
//         }),
//       ],
//     }) => ({}),
//     test: async ({
//       requires = ['get-metadata', 'build'],
//       steps = [
//         new Checkout(),
//         new SetupNode({
//           cache: 'yarn',
//           nodeVersion: '16.x',
//         }),
//         new EnableCorepack(),
//         new SetYarnVersionStable(),
//         new GitHubActionCache({
//           path: [
//             '.yarn/cache',
//             '.yarn/patches',
//             '.yarn/plugins',
//             '.yarn/releases',
//             '.yarn/sdks',
//             '.yarn/versions',
//           ],
//           key: "${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}",
//           restoreKeys: ['${{ runner.os }}-yarn-'],
//         }),
//         new YarnInstall({ environment: { NODE_ENV: 'test' } }),
//         new RunTests(),
//         new CollectTestCoverage(),
//         new GitHubActionUploadArtifact({
//           name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.env-vars.outputs.branch }}-code-coverage.json',
//           path: 'coverage/coverage-summary.json',
//         }),
//         new UploadCoverageToCoveralls({
//           token: '${{ secrets.GITHUB_TOKEN }}',
//         }),
//       ],
//     }) => ({}),
//     publish: async ({
//       requires = ['get-metadata', 'build', 'test'],
//       steps = [
//         new GitHubActionDownloadArtifact({
//           name: '${{ github.event.repository.owner.login }}-${{ github.event.repository.name }}-${{ needs.get-metadata.outputs.branch }}-${{ needs.get-metadata.outputs.version }}-build',
//         }),
//         new SetupNode({
//           cache: 'yarn',
//           nodeVersion: '16.x',
//         }),
//         new EnableCorepack(),
//         new SetYarnVersionStable(),
//         new GitHubActionCache({
//           path: [
//             '.yarn/cache',
//             '.yarn/patches',
//             '.yarn/plugins',
//             '.yarn/releases',
//             '.yarn/sdks',
//             '.yarn/versions',
//           ],
//           key: "${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}",
//           restoreKeys: ['${{ runner.os }}-yarn-'],
//         }),
//         new CreateFileAction(
//           '.yarnrc.yml',
//           new ObjectToYamlTransformer().transform({
//             nodeLinker: 'node-modules',
//             npmScopes: {
//               '${{ github.event.repository.owner.login }}': {
//                 npmRegistryServer: 'https://registry.npmjs.org',
//                 npmAlwaysAuth: true,
//                 npmAuthToken: '${{ secrets.NPM_ACCESS_TOKEN }}',
//               },
//             },
//           }),
//         ),
//         new YarnPublish(),
//       ],
//     }) => ({}),
//   };
// }

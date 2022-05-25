import { File, Project } from '@srclaunch/types';
import { SrcLaunchConfigGenerator } from '../../generators/config/srclaunch/project';
import { Action } from '../index';

export class UpdateSrcLaunchConfigAction extends Action {
  description = 'Updates the SrcLaunch config file';

  async run(options?: Project) {
    // const existingConfig = await unconfig.load();
  }
}

export class GetSrcLaunchProjectConfigAction extends Action {
  description = 'Gets the SrcLaunch config file';

  async run(options?: Project) {
    // const existingConfig = await unconfig.load({
  }
}

export class CheckSrcLaunchProjectConfigAction extends Action {
  description = 'Builds the project.';

  async run(options?: Project) {
    // const existingConfig = await unconfig.load({
  }
}

export class CreateSrcLaunchProjectConfigAction extends Action {
  description = 'Creates a SrcLaunch project config file.';
  file?: File;

  constructor(file?: File) {
    super();

    this.file = file;
  }

  async run(project?: Project) {
    const config = new SrcLaunchConfigGenerator(this.file);
    const configFileContents = await config.generate(project);

    return configFileContents;
  }
}

import { mkdirs, emptyDir, ensureDir, remove } from "fs-extra";
import { Action } from "../index";

export class CreateDirectoryAction extends Action {
  directory: string = undefined;

  constructor(directory?: string) {
    super();

    this.directory = directory;
  }

  async run(directory?: string) {}
}

export class DeleteDirectoryAction {
  directory: string = undefined;

  constructor(directory?: string) {
    this.directory = directory;
  }

  async run(directory?: string) {
    if (!directory && !this.directory) {
      throw new Error("Directory must be provided");
    }

    if (directory === "/" || this.directory === "/") {
      throw new Error("Cannot delete root directory");
    }

    try {
      await remove(directory ?? this.directory);
    } catch (err) {
      throw new Error(`Could not delete directory: ${directory}`);
    }
  }
}

export class EmptyDirectoryAction {
  directory: string = undefined;

  constructor(directory?: string) {
    this.directory = directory;
  }

  async run(directory?: string) {
    if (!directory && !this.directory) {
      throw new Error("Directory must be provided");
    }

    if (directory === "/" || this.directory === "/") {
      throw new Error("Cannot delete root directory");
    }

    try {
      await emptyDir(directory ?? this.directory);
    } catch (err) {
      throw new Error(`Could not delete directory: ${directory}`);
    }
  }
}

export class EnsureDirectoryExistsAction {
  directory: string = undefined;

  constructor(directory?: string) {
    this.directory = directory;
  }

  async run(directory?: string) {
    if (!directory && !this.directory) {
      throw new Error("Directory must be provided");
    }

    if (directory === "/" || this.directory === "/") {
      throw new Error("Cannot delete root directory");
    }

    try {
      await ensureDir(directory ?? this.directory);
    } catch (err) {
      throw new Error(`Could not delete directory: ${directory}`);
    }
  }
}

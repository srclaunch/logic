import { accessDir } from "fs-extra";
import { Analyzer } from "../index";

export class DirectoryExistsAnalyzer extends Analyzer {
  result: boolean = undefined;

  async analyze(path: string): Promise<boolean> {
    try {
      await accessDir(path);
      this.result = true;
      return true;
    } catch (err) {
      this.result = false;
      return false;
    }
  }
}

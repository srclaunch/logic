import { Project } from "@srclaunch/types";
import { Condition } from "../../conditions";
import { Validator } from "../index";
import { ValidationProblem } from "../problem";

export class SrcLaunchConfigValidator extends Validator {
  problems = [];

  constructor() {
    super([]);
  }

  async validate(config: Project) {
    if (!config) {
      this.problems = this.problems.concat(
        new ValidationProblem(Condition.IsRequired)
      );
    }

    if (!config.name) {
      this.problems = this.problems.concat(
        new ValidationProblem(Condition.IsRequired, {
          subject: "name",
        })
      );
    }

    if (!config.description) {
      this.problems = this.problems.concat(
        new ValidationProblem(Condition.IsRequired, {
          subject: "name",
        })
      );
    }

    if (!config.type) {
      this.problems = this.problems.concat(
        new ValidationProblem(Condition.IsRequired, {
          subject: "name",
        })
      );
    }

    // TODO: Add more checks here

    return this.problems;
  }
}

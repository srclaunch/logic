// import { Action as ActionType } from "@srclaunch/types";

import { Action as ActionType } from '@srclaunch/types';

export class Action implements ActionType {
  action?: string;
  id?: string;
  description?: string;
}

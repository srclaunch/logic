import { Action as ActionType, GitHubAction } from '@srclaunch/types';
import { Action } from '../../index';

export class Checkout extends Action implements ActionType {
  action = GitHubAction.Checkout;
  id = 'checkout';
  description = 'Checkout';
}

import { GitHubActionsWorkflowStep } from '@srclaunch/types';
import { setEnvironmentVariable } from '../environment/set-variable';

export const writeFile = ({
  contents,
  description,
  path,
}: {
  contents?: string;
  description?: string;
  path: string;
}): GitHubActionsWorkflowStep => (
  setEnvironmentVariable({ name: 'TMP_FILE_CONTENTS', value: contents }),
  {
    name: description,
    run: [`echo "\${{ env.TMP_FILE_CONTENTS }}" > ${path}`],
  },
  setEnvironmentVariable({ name: 'TMP_FILE_CONTENTS', value: null })
);

export const setEnvironmentVariable = ({
  description,
  name,
  value,
}: {
  description?: string;
  name?: string;
  value?: string;
}) => ({
  name: description,
  run: [
    `${name}=$(cat << EOF ${value} EOF)`,
    `echo "${name}<<EOF" >> $GITHUB_ENV`,
    `echo "$${name}" >> $GITHUB_ENV`,
    `echo "EOF" >> $GITHUB_ENV`,
  ],
});

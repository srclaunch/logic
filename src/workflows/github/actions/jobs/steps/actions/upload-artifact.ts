export const uploadArtifact = ({
  paths,
  name,
}: {
  paths: string[];
  name: string;
}) => ({
  name: 'Upload release artifact',
  uses: 'actions/upload-artifact@v3',
  with: {
    name,
    path: paths,
  },
});

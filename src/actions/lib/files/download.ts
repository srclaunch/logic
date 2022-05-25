import fileDownload from 'js-file-download';

export function downloadDataAsFile({
  data,
  fileName,
}: {
  data: string;
  fileName: string;
}): void {
  fileDownload(data, `${fileName}.csv`);
}

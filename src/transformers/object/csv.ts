export const transformObjectToCSV = async (
  obj: Record<string, unknown>,
): Promise<unknown> => {
  const csv = Object.keys(obj)
    .map(key => `${key},${obj[key]}`)
    .join('\n');

  return csv;
};

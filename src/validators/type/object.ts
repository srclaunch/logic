export function objectHasProperty(
  obj: Record<string, unknown>,
  prop: string,
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

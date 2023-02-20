/* eslint-disable @typescript-eslint/no-explicit-any */

export function objectToArray<ArrayType = any[]>(
  object: object
): ArrayType {
  return Object.entries(object).reduce(
    (prev, [, value]) => {
      prev.push(value as any);
      return prev;
    },
    [] as any[]
  ) as ArrayType;
}

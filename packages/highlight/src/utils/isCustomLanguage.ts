import { HighlightCustomLanguage } from "../languages/custom";

export function isCustomLanguage<
  Value,
  Name extends string,
  Alias extends string
>(
  object: Value | HighlightCustomLanguage<Name, Alias>
): object is HighlightCustomLanguage<Name, Alias> {
  if (
    object instanceof HighlightCustomLanguage<Name, Alias>
  ) {
    return true;
  }

  return false;
}

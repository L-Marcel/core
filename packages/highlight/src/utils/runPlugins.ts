/* eslint-disable @typescript-eslint/no-explicit-any */
import { CoreHighlightProps } from "..";
import {
  HighlightPlugin,
  HighlightPluginData,
} from "../plugins";

type NotRequiredFunction =
  | undefined
  | ((...args: any) => any);

type PluginFunctionParameters<
  T extends NotRequiredFunction
> = T extends (...args: infer P) => any ? P[1] : undefined;

export function runPlugins<
  Call extends keyof HighlightPluginData<any>,
  Value extends HighlightPluginData<any>[Call],
  Data extends PluginFunctionParameters<Value>
>(
  plugins: HighlightPlugin<any>[],
  call: Call,
  input: Data,
  highlightProps: CoreHighlightProps
): Data {
  let result: Data = input;

  plugins.forEach(({ plugin, settings }) => {
    const method = plugin[call];

    if (method) {
      result = method(
        settings,
        result as any,
        highlightProps
      ) as Data;
    }
  });

  return result;
}

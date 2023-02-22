/* eslint-disable @typescript-eslint/no-explicit-any */
import { CoreHighlightProps } from "..";
import {
  HighligthPlugin,
  HighligthPluginData,
} from "../plugins";

type NotRequiredFunction =
  | undefined
  | ((...args: any) => any);

type PluginFunctionParameters<
  T extends NotRequiredFunction
> = T extends (...args: infer P) => any ? P[1] : undefined;

export function runPlugins<
  Call extends keyof HighligthPluginData<any>,
  Value extends HighligthPluginData<any>[Call],
  Data extends PluginFunctionParameters<Value>
>(
  plugins: HighligthPlugin<any>[],
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

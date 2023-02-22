import { Heading, Text } from "./base/Text";

export interface EditableHighlightHelpProps {
  mode: string;
  help: string;
  plugin?: boolean;
};

export function EditableHighlightHelp({
  mode,
  plugin = false,
  help
}: EditableHighlightHelpProps) {
  return (
    <>
      <Text 
        style={{
          marginTop: ".25rem",
          marginBottom: ".25rem"
        }}
      >
        Mode: {mode}{plugin? ` / core plugin enabled`:""}
      </Text>
      <Heading 
        size="sm" 
        style={{
          marginTop: ".25rem",
          marginBottom: "1rem"
        }}
      >
        {help}
      </Heading>
    </>
  );
};
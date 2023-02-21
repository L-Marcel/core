import { Heading, Text } from "./base/Text";

export interface EditableHighlightHelpProps {
  mode: string;
  help: string;
};

export function EditableHighlightHelp({
  mode,
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
        Mode: {mode}
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
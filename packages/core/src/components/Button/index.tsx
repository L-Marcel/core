import { ComponentProps } from "@stitches/react";
import { ButtonContainer } from "./styles";

export type ButtonProps = ComponentProps<typeof ButtonContainer>;

export function Button({ ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}/>
  );
}
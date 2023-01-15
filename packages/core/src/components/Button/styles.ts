import { styled } from "@stitches/react";
import tw from "twin.macro";

export const ButtonContainer = styled(
  "button",
  {
    ...tw`
    rounded-lg
  `,
  },
  {
    variants: {
      variant: {
        icon: {
          ...tw`
          p-4
        `,
        },
      },
    },
  }
);

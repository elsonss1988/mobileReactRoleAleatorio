import { ButtonStyled, TextButtonStyled } from "./style";
import { Text } from "react-native";

type ButtonType = {
  text?: string;
};

export function Button({ text }: ButtonType) {
  return (
    <ButtonStyled>
      <TextButtonStyled>{text}</TextButtonStyled>
    </ButtonStyled>
  );
}

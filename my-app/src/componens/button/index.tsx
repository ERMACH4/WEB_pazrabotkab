import { FC } from "react";
import styled from "styled-components";

interface ButtonInterface {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 0px;
  border: none;

  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
`;

export const Button: FC<ButtonInterface> = ({ text, onClick }) => {


  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

import styled from "styled-components";
import { Button } from "../button";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../App";
import { tranlation } from "../../tralation/tranlation";

const Wrapper = styled.header`
  display: flex;
  justify-content: end;

  gap: 12px;
  margin: 48px;
`;

export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
      <Button
        onClick={changeLanguage}
        text={tranlation(language, "language")}
      />
      <Button
        onClick={themeContext.changeTheme}
        text={tranlation(language, "theme")}
      />
    </Wrapper>
  );
};

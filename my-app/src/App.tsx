import { createContext, useState } from "react";
import { GlobalStyle } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, darkTheme, lightTheme } from "./styles/theme";
import { Language } from "./tralation/tranlation";
import { Header } from "./componens/header";
import { Main } from "./componens/main";

export interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}
export interface ThemeInterface {
  themeMode?: ThemeConfig;
  changeTheme?: () => void;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});

export const ThemeContext = createContext<ThemeInterface>({});

function App() {
  const [language, setLanguage] = useState(Language.EN);
  const [themeMode, setThemeMode] = useState(lightTheme);

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.EN)
      : setLanguage(Language.RU);
  };

  const changeTheme = () => {
    themeMode === lightTheme
      ? setThemeMode(darkTheme)
      : setThemeMode(lightTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ themeMode, changeTheme }}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <LanguageContext.Provider value={{ language, changeLanguage }}>
            <Header />
            <Main />
          </LanguageContext.Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
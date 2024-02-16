export enum THeme {
  Light = 'Light',
  Dark = 'Dark' ,
}
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  buttonColor: string;
  textColor: string;
}

export const lightTheme: ThemeConfig = {
  primaryColor: "#ffffff",
  secondaryColor: '#000000',

  buttonColor: '#000000',
  textColor: '#ffffff',
};

export const darkTheme: ThemeConfig = {
  primaryColor: '#111133',
  secondaryColor: "#ffffff",
  buttonColor: '#bd0000',
  textColor: '#d58f8f'
}
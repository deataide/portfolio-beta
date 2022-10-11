import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      lightpurple: string;

      secondary: string;
      lightblue: string;

      especial: string;

      background: string;
      text: string;
      textsecondary: string;
    };
  }
}

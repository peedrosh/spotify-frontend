import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    dark: string;
    light: string;
    danger: string;
  }
}

'use client';

import { GlobalStyles } from '@/styles/global';
import { theme } from '@/styles/theme/theme';
import { ThemeProvider } from 'styled-components';

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

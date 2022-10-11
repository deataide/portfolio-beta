import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Global from './styles/Global';
import usePersistedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import About from './components/About';
import Form from './components/Form';
import Projects from './components/Projects';
import This from './components/This';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Main />
      <About />
      <This />
      <Projects />
      <Form />
      <Footer />
      <Global />
    </ThemeProvider>
  );
};

export default App;

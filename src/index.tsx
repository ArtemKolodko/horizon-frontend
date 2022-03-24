import * as React from "react";
import { render } from "react-dom";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {darkTheme, theme} from "./theme";
import AppHeader from "./components/AppHeader";
import {useStores} from "./use-stores";
import {observer} from "mobx-react";
import { Grommet } from 'grommet';

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  body {
      background: ${props => props.theme.global.colors.background};
      transition: background 2500ms;
  }
`

const App = observer(() => {
    const { configStore } = useStores()
    return (
      <Grommet
        theme={configStore.themeMode === 'light' ? theme : darkTheme}
        themeMode={configStore.themeMode}
        full
      >
          <GlobalStyle />
          <AppHeader />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
          />
      </Grommet>
    );
})

const rootElement = document.getElementById("root");
render(<App />, rootElement);

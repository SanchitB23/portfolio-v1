import React from 'react'
import '../../resources/styles/normalize.css'
import GlobalStyles from "../../resources/styles/GlobalStyles";
import '../../resources/sass/main.scss'

import {ThemeProvider} from "styled-components";
import theme from "../../resources/styles/theme";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({element}) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {element}
  </ThemeProvider>
}

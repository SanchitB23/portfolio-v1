import {createGlobalStyle} from "styled-components";
import fonts from "./fonts";
import cssVariables from "./cssVariables";

export default createGlobalStyle`
  ${fonts}
  ${cssVariables}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--light-navy);
    color: var(--orange2);
  }

  html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
  }

  body {
    background-color: var(--navy);
    box-sizing: border-box;
    color: var(--white);

  }
`

import React from 'react'
import '../../resources/styles/normalize.css'
import GlobalStyles from "../../resources/styles/GlobalStyles";
import '../../resources/sass/main.scss'


export const wrapRootElement = ({element}) => {
  return <>
    <GlobalStyles/>
    {element}
  </>
}

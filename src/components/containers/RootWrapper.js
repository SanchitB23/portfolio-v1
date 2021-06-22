import React from 'react'
import '../../resources/styles/normalize.css'
import GlobalStyles from "../../resources/styles/GlobalStyles";


export const wrapRootElement = ({element}) => {
  return <>
    <GlobalStyles/>
    {element}
  </>
}

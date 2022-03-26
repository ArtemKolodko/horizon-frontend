import {createGlobalStyle} from "styled-components";
import GothamLightWoff from './GothamRnd/GothamRnd-Light.woff'
import GothamLightWoff2 from './GothamRnd/GothamRnd-Light.woff2'
import GothamMediumWoff from './GothamRnd/GothamRnd-Medium.woff'
import GothamMediumWoff2 from './GothamRnd/GothamRnd-Medium.woff2'
import GothamBoldWoff from './GothamRnd/GothamRnd-Bold.woff'
import GothamBoldWoff2 from './GothamRnd/GothamRnd-Bold.woff2'

// https://en.bestfonts.pro/font/gotham-rounded#google_vignette

export default createGlobalStyle`
  @font-face {
    font-family: 'GothamRounded';
    src: url(${GothamLightWoff}) format('woff'),
    url(${GothamLightWoff2}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'GothamRounded';
    src: url(${GothamMediumWoff}) format('woff'),
    url(${GothamMediumWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GothamRounded';
    src: url(${GothamBoldWoff}) format('woff'),
    url(${GothamBoldWoff2}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }
`

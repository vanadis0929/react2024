import { Fragment } from 'react';

import { createGlobalStyle, keyframes, styled } from 'styled-components';

import { Button, ButtonCircle } from './components/Button';

const root = `
:root {
  --colorPrimary10: #e1001e;
  --colorSecondary10: #ffdd00;
  --colorSecondary20: #62b342;
  --colorSecondary30: #ce9f5a;
  --textLight10: #000;
  --textLight20: #454545;
  --textLight30: #707070;
  --textLight40: #999;
  --lineLight10: #ccc;
  --bgLight10: #f2ece9;
  --bgLight20: #f7f7f7;
  --textDark10: #fff;
  --textDark20: #454545;
  --lineDark10: #000;
  --lineDark20: #222;
  --bgDark10: #242424;
  --bgDark20: #d9d9d9;
  --minLayoutWidth: 1220px;
  --maxLayoutWidth: 1920px;
  --swiper-preloader-color: var(--colorPrimary10);
  --swiper-pagination-color: var(--lineDark10);
  --swiper-pagination-bullet-inactive-color: var(--lineDark10);
  --swiper-pagination-bullet-inactive-opacity: 0.3;
  --swiper-pagination-bullet-opacity: 1;
}
`;
const reset = `


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*::before, *::after {
  box-sizing: border-box;
}

html {
  font: 10px/1.2 "Noto Sans KR", sans-serif, "맑은 고딕", Malgun Gothic, "돋움", Dotum, applegothic, Tahoma, Arial, sans-serif;
  -webkit-text-size-adjust: none;
  min-width: var(--minLayoutWidth);
  overflow-x: auto;
}
html.mobile {
  min-width: 0;
}

html,
body {
  height: 100%;
}

body {
  font-size: 1.6rem;
  color: var(--textLight10);
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
}

iframe,
audio,
video {
  display: block;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

ul,
ol {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

details > summary::marker,
details > summary::-webkit-details-marker {
  content: "";
  display: none;
}

hr {
  display: block;
  height: 1px;
  border: none;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
  min-inline-size: 0;
}

dfn,
address,
em {
  font-style: normal;
}

legend,
caption {
  display: none;
  clear: both;
}

label[for] {
  cursor: pointer;
}

button,
input,
textarea {
  font-family: inherit;
}

button {
  cursor: pointer;
  vertical-align: middle;
  border: none;
  background-color: transparent;
  color: inherit;
}

input {
  vertical-align: middle;
  border: 1px solid #000;
}
input[type=number] {
  -moz-appearance: textfield;
}
input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button {
  margin: 0;
  display: none;
}
input[type=search] {
  background-color: var(--textDark10, #ffffff);
}
input[type=search]::-webkit-search-decoration, input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-results-button, input[type=search]::-webkit-search-results-decoration {
  color: var(--textLight30, #707070);
  -webkit-appearance: none;
}
input[type=checkbox], input[type=radio] {
  width: 13px;
  height: 13px;
  border-radius: 0;
  border: 1px solid #ddd;
  cursor: pointer;
}

::placeholder,
::-webkit-input-placeholder {
  color: var(--bgDark20, #d9d9d9);
  opacity: 1;
}

::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

select {
  cursor: pointer;
  border: 1px solid #ddd;
  color: #000;
  border-radius: 0;
}

textarea {
  resize: none;
  border-radius: 0;
}

img {
  max-width: 100%;
  vertical-align: top;
}

a {
  text-decoration: none;
  color: var(--textLight40, #999999);
  color: inherit;
}

`;

const Global = createGlobalStyle`
  ${root}
  ${reset}
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    place-content: center;
    place-items: center;
    background-color: ${(props) => props.theme.bgColor} ;
    color: ${(props) => props.theme.textColor} ;
  }
`;

//animation keyframe 작성 및 적용
const anime = keyframes`
  from { rotate: 0deg; border-radius: 0}
  to { rotate: 360deg;border-radius: 100% }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  width: 100px;
  aspect-ratio: 1/1;
  background-color: tomato;
  //animation keyframe 작성 및 적용
  animation: ${anime} 1s infinite linear;

  &:before {
    content: 'fff';
  }

  // 태그명이 아닌 styled component 자체를 불러오는것도 가능
  &:hover > ${Emoji} {
    background-color: yellow;
  }
`;

function App() {
  return (
    <Fragment>
      <Global />
      <Box>
        <Emoji as="div">111</Emoji>
      </Box>
      ddd
      <Button type="button" />
     
      <Button type="reset" as="a" href="#none">
        ffff
      </Button>
    </Fragment>
  );
}

export default App;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  ${reset}

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
    height: 100%;
    color: #000;
    font-size: 10px;
    -webkit-text-size-adjust: none;
    
  }

  body {
    height: 100%;
    font: 1.4rem / 1.2 system-ui, sans-serif;
    word-break: keep-all;
    word-wrap: break-word;
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
    margin: 0;
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
    content: '';
    content: none;
  }

  details > summary::marker,
  details > summary::-webkit-details-marker {
    content: '';
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
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    -ms-content-zooming: none;
  }

  input {
    vertical-align: middle;
    border: 1px solid #000;
  }

  input[type='number']::-webkit-outer-spin-button, input[type='number']::-webkit-inner-spin-button {
    margin: 0;
    display: none;
  }

  input[type='search'] {
    background-color: #ffffff;
  }

  input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration {
    color: #757575;
    -webkit-appearance: none;
  }

  input[type='checkbox'], input[type='radio'] {
    width: 13px;
    height: 13px;
    border-radius: 0;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  ::-webkit-input-placeholder {
    color: #cbcbcb;
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
    color: #9e9e9e;
  }


`;
root.render(
  // <React.StrictMode>
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
  // </React.StrictMode>
);

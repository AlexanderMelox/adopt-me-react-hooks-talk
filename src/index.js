import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';

import App from './App';
import StoreProvider from './store';

ReactDOM.render(
  <StoreProvider>
    {/* Adds global styles to the app */}
    <Global
      styles={css`
        :root {
          --imperial-red: #e63946;
          --honeydew: #f1faee;
          --powder-blue: #a8dadc;
          --steel-blue: #457b9d;
          --prussian-blue: #1d3557;

          --text: var(--honeydew);
          --text-inverted: #444;

          --radius: 1rem;
          --shadow: 0.5rem 0.5rem 0px rgba(0, 0, 0, 0.2);
          --shadow-small: 3px 3px 0px rgba(0, 0, 0, 0.2);
        }

        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
        }

        body {
          background-color: var(--steel-blue);
          line-height: 1.6;
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
          color: var(--text);
          padding-bottom: 300px;
        }

        h2 {
          margin-bottom: 2rem;
        }
      `}
    />
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

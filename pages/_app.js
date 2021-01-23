import 'swiper/swiper.scss';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../store/store';



const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

  

  h1, h2 {
    text-transform: uppercase;
    font-family: 'PT Serif';
    letter-spacing: 0.1em;
    color: #562F2F;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #562F2F;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @keyframes fade{
    0% {
        opacity: 0;
    }
    100%{
        opacity: 100%
    }
}
`



function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp;

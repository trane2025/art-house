import 'swiper/swiper.scss';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../store/store';
import NextNprogress from 'nextjs-progressbar';
import '../styles/global.scss'



const GlobalStyle = createGlobalStyle`
  /* .rc-slider-handle {
        border: solid 2px #690808;
    } */
`



function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <NextNprogress
        color="#FBD2A4"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ easing: 'ease', speed: 500 }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp;

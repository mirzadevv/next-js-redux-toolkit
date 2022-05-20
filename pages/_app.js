import "../styles/globals.css";
import NavBar from "../components/navBar";
import { wrapper } from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

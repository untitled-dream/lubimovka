import { useEffect, useState } from "react";

import useWindowDimensions from '../hooks/useWindowDimensions';

import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const { width } = useWindowDimensions();

  const [isMenuState, setMenuState] = useState(false);
  const [onMenuShow, setMenuShow] = useState(false)

  useEffect(() => {
    if (width > 1357) {
      setMenuShow(false);
      setMenuState(false);
    } else {
      setMenuShow(true);
    }
  }, [width])

  function handleModalClick() {
    setMenuState(!isMenuState);
  }

  return (
    <>
      <Header currentWindowWidth={width} />
      <Menu
        isMenuState={isMenuState}
        onShow={onMenuShow}
        onToggleState={handleModalClick}
        currentWindowWidth={width}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;

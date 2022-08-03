import { useEffect, useState } from "react";

import useWindowDimensions from '../hooks/useWindowDimensions';

import Menu from "./Menu";
import MenuNavigation from './MenuNavigation'
import MenuSocial from './MenuSocial'
import MenuDonation from "./MenuDonation";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Scrolling from "./Scrolling";

function App() {
  const { width } = useWindowDimensions();

  const [isMenuState, setMenuState] = useState(false);
  
  useEffect(() => {
    if (width > 1357) {
      setMenuState(!isMenuState);
    }
  }, [])

  function handleModalClick() {
    setMenuState(!isMenuState);
  }

  return (
    <>
      <Header
        currentWindowWidth={width}
        menuNavigation={<MenuNavigation />}
        menuSocial={<MenuSocial />}
        menuDonation={<MenuDonation />}
      />

      <Menu
        isMenuState={isMenuState}
        onToggleState={handleModalClick}
        currentWindowWidth={width}
        menuNavigation={<MenuNavigation />}
        menuSocial={<MenuSocial />}
        menuDonation={<MenuDonation />}
      />
      <Main />
      <Footer />
      {/* <Scrolling/> */}
    </>
  );
}

export default App;

/* 

menuSocial={<MenuSocial />}
menuDonation={<MenuDonation />}

*/
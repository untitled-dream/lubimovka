import React from "react";

import useWindowDimensions from '../hooks/useWindowDimensions';

import Menu from "./Menu";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Scrolling from "./Scrolling";

function App() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Header currentWindowWidth={width}/>
      <Menu currentWindowWidth={width} />
      <Main />
      <Footer />
      {/* <Scrolling/> */}
    </>
  );
}

export default App;
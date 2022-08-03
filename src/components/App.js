import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Scrolling from "./Scrolling";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Header />
      <Menu/>
      <Main />
      <Footer />
      {/* <Scrolling/> */}
    </>
  );
}

export default App;
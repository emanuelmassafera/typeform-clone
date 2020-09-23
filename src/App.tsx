import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import {
  Main,
  Section,
} from './styles';

import FirstAndSecond from "./components/FirstAndSecond";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: "1610vh" }}>

        <Section style={{ height: "95%" }}>

          <FirstAndSecond />

        </Section>

      </Main>

      <Footer />
    </>
  );
}

export default App;

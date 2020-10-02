import React from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import { Global } from "./styled/Global";

function App() {
  return (
    <>
      <Global />
      <Main>
        <Container>
          <Navbar />
        </Container>
      </Main>
    </>
  );
}

export default App;

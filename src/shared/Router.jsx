import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layoutmodel1 from "../layout/Layoutmodel1";
import Layoutmodel2 from "../layout/Layoutmodel2";
import Layoutmodel3 from "../layout/Layoutmodel3";
import Layoutmodel4 from "../layout/Layoutmodel4";
import { ContainerWrap, MainWrap, Wrap } from "../components/GlobalStyled";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <MainWrap>
            <ContainerWrap>
              <Routes>
                <Route path="" element={<Layoutmodel1 />} />
                <Route path="2" element={<Layoutmodel2 />} />
                <Route path="3" element={<Layoutmodel3 />} />
                <Route path="4" element={<Layoutmodel4 />} />
              </Routes>
            </ContainerWrap>
          </MainWrap>
        </Wrap>
      </BrowserRouter>
    </>
  );
}

export default Router;

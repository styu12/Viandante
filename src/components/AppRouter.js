import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import Stay from "routes/Stay";
import Review from "routes/Review";
import Magazine from "routes/Magazine";
import Event from "routes/Event";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import Footer from "./Footer";
import StayDetail from "routes/StayDetail";
import RoomDetail from "routes/RoomDetail";

//앱 전체 router
const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header theme={theme} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/stay" element={<Stay />}></Route>
          <Route exact path="/stay/detail/:id" element={<StayDetail />}></Route>
          <Route
            exact
            path="/stay/detail/:id/:roomId"
            element={<RoomDetail />}
          ></Route>
          <Route exact path="/review" element={<Review />}></Route>
          <Route exact path="/magazine" element={<Magazine />}></Route>
          <Route exact path="/event" element={<Event />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;

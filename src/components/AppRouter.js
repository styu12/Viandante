import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import Room from "routes/Room";
import Review from "routes/Review";
import Magazine from "routes/Magazine";
import Event from "routes/Event";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

//앱 전체 router
const AppRouter = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [currentThemeText, setCurrentThemeText] = useState("Light Theme");

  const switchTheme = () => {
    const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(nextTheme);
    const nextThemeText = theme === lightTheme ? "Dark Theme" : "Light Theme";
    setCurrentThemeText(nextThemeText);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header switchTheme={switchTheme} currentThemeText={currentThemeText} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/room" element={<Room />}></Route>
          <Route exact path="/review" element={<Review />}></Route>
          <Route exact path="/magazine" element={<Magazine />}></Route>
          <Route exact path="/event" element={<Event />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;

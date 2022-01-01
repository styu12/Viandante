import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigator from "components/Navigator";
import Home from "routes/Home";
import Room from "routes/Room";


//앱 전체 router
const AppRouter = () => {
    return (
        <Router>
            <Navigator />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact paht="/room" element={<Room />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;
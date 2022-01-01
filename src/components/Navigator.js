import React from "react";
import { Link } from "react-router-dom";

// 상단 메뉴바
const Navigator = () => {
    return (
        <>
            <h1><Link to="/">Viandante</Link></h1>
            <ul>
                <li>
                    <Link to="/room">Room</Link>
                </li>
                <li>
                    <Link to="/review">Review</Link>
                </li>
                <li>
                    <Link to="/magazine">Magazine</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigator;
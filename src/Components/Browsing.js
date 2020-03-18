import React, { useLayoutEffect } from "react";

import { Link } from "react-router-dom";

export const Browsing = props => {
    useLayoutEffect(() => {
        const a = document.querySelector(".selected");
        const b = document.querySelector(".selected_border");
        b.style.left = `${a.offsetLeft}px`;
        b.style.width = `${a.offsetWidth}px`;
    });

    return (
        <div className="navContainer">
            <div className="selected_border"></div>
            <div className="nav">
                <Link className={props.selectedTab === "/" ? "selected" : null} to="/">
                    Home
                </Link>

                <Link className={props.selectedTab === "/jsx" ? "selected" : null} to="/jsx">
                    JSX Props
                </Link>

                <Link className={props.selectedTab === "/react" ? "selected" : null} to="/react" >
                    React Hooks
                </Link>

                <Link className={props.selectedTab === "/exercise" ? "selected" : null} to="/exercise">
                    Exercise
                </Link>
            </div>
        </div>
    );
};

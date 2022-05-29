import React, { useState } from "react";
import "./Statistics.scss";
import { Income } from "./Income/Income";
import { Navbar } from "../Reusable/Navbar";
export const Chart = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="container-wrapper-1">
            <Navbar />
            <div className="income-wrapper">
                <h1>Income</h1>
                <div className="income-chart">
                    <Income />
                </div>
            </div>
        </div>
    );
};

import React from "react";
import "./Income.scss";
import ApexChart from "./ApexChart/ApexChart";
export const Income = () => {
    return (
        <div
            className="chart-container"
            style={{ width: "100%", height: "100%" }}
        >
            <div style={{ width: "100%", height: "100%" }}>
                <ApexChart />
            </div>
        </div>
    );
};

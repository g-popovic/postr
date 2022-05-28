import React from "react";
import "./Income.scss";
import ApexChart from "./ApexChart/ApexChart";
export const Income = () => {
    return (
        <div className="chart-container">
            <div>Your Statistics</div>
            <div>
                <ApexChart />
            </div>
        </div>
    );
};

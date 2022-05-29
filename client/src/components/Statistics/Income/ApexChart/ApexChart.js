import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";
const ApexChart = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    });
    return (
        <div id="chart">
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={500}
                width={1100}
            />
        </div>
    );
};

export default ApexChart;

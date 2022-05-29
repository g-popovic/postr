import axios from "axios";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const ApexChart = () => {
    // async function getDataForChart() {
    //     const result = await axios.get("http//:localhost:3001", (res) => {
    //         result.forEach((item) => {
    //             state.options.xaxis.categories[0].push([
    //                 item.date,
    //                 item.priceData,
    //             ]);
    //         });
    //     });
    // }
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            annotations: {
                position: "front",
                yaxis: [
                    {
                        y: 0,
                        y2: null,
                        strokeDashArray: 1,
                        borderColor: "#c2c2c2",
                        fillColor: "#c2c2c2",
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: -3,
                        width: "100%",
                        yAxisIndex: 0,
                        label: {
                            borderColor: "#c2c2c2",
                            borderWidth: 1,
                            borderRadius: 2,
                            text: undefined,
                            textAnchor: "end",
                            position: "right",
                            offsetX: 0,
                            offsetY: 0,
                            mouseEnter: undefined,
                            mouseLeave: undefined,
                            style: {
                                background: "#fff",
                                color: "#777",
                                fontSize: "12px",
                                fontWeight: 400,
                                fontFamily: undefined,
                                cssClass: "apexcharts-yaxis-annotation-label",
                                padding: {
                                    left: 5,
                                    right: 5,
                                    top: 0,
                                    bottom: 2,
                                },
                            },
                        },
                    },
                ],
                xaxis: [
                    {
                        x: 0,
                        x2: null,
                        strokeDashArray: 0,
                        borderColor: "transparent",
                        fillColor: "red",
                        opacity: 0.3,
                        offsetX: 0,
                        offsetY: 0,
                        label: {
                            borderColor: "red",
                            borderWidth: 1,
                            borderRadius: 2,
                            text: undefined,
                            textAnchor: "middle",
                            position: "top",
                            orientation: "vertical",
                            offsetX: 0,
                            offsetY: 0,
                            mouseEnter: undefined,
                            mouseLeave: undefined,
                            style: {
                                color: "#777",
                                fontSize: "12px",
                                fontWeight: 400,
                                fontFamily: undefined,
                                cssClass: "apexcharts-xaxis-annotation-label",
                            },
                        },
                    },
                ],
                // points: [
                //     {
                //         x: 0,
                //         y: null,
                //         yAxisIndex: 0,
                //         seriesIndex: 0,
                //         mouseEnter: undefined,
                //         mouseLeave: undefined,
                //         marker: {
                //             size: 0,
                //             strokeColor: "red",
                //             strokeWidth: 13,
                //             shape: "circle",
                //             radius: 2,
                //             OffsetX: 0,
                //             OffsetY: 0,
                //             cssClass: "",
                //         },
                //     },
                // ],
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                ],
                // categories: Array(),
                axisBorder: {
                    show: true,
                    color: "transparent",
                    height: 1,
                    width: "100%",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: true,
                    borderType: "solid",
                    height: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: 0,
                        fontFamily: 0,
                    },
                },
            },
            tooltip: {
                enabled: false,
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
        <div
            id="chart"
            className="chart"
            style={{ width: "100%", height: "100%" }}
        >
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height="100%"
                width="100%"
            />
        </div>
    );
};

export default ApexChart;

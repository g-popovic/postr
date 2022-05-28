import React, { useState } from "react";
import { BestPosts } from "./Best-Posts/BestPosts";
import "./Statistics.scss";
import { Income } from "./Income/Income";
export const Chart = () => {
    const [clicked, setClicked] = useState(false);
    // const [clickedBestPosts, setClickedBestPosts] = useState(false);

    return (
        <div className="container-wrapper-1">
            <div className="container-1">
                <div className="my-income">My Income</div>
                <div className="income-wrapper">
                    <button onClick={() => setClicked(true)} className="button">
                        Income
                    </button>
                    <button
                        className="button"
                        onClick={() => setClicked(false)}
                    >
                        Best Posts
                    </button>
                </div>
            </div>
            <div>
                {clicked === true ? (
                    <div className="container-wrapper">
                        <Income />
                    </div>
                ) : (
                    <div>
                        <BestPosts />
                    </div>
                )}
            </div>
        </div>
    );
};

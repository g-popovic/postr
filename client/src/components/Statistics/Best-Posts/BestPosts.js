import React from "react";
import { Post } from "../../Reusable/Post";
import "./BestPosts.scss";
import "../../explore-page/explore.scss";
export const BestPosts = () => {
    return (
        <div className="best-posts-container-wrapper">
            <div className="best-posts-container">
                <div className="wrapper">
                    <div className="post-container-best-posts">
                        <Post className="wrapper" />
                        <Post className="post-container-for-best-posts" />
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import "../explore-page/explore.scss";
export function Post() {
    return (
        <div className="wrapper">
            <div className="title-container">
                <img className="profile-img" />
                <h1 className="username">Uros Stesevic</h1>
            </div>
            <span className="post-content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
            </span>
            <div className="likes">
                <i class="fa-regular fa-heart"></i> <span>234 Likes</span>
            </div>
        </div>
    );
}

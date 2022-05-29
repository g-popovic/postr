import React from "react";
import guy from "../../assets/guy.jpg";
export function Post({ data }) {
    const { content, likes, userId } = data;
    return (
        <div className="wrapper">
            <div className="username-container">
                <img className="profile-img" src={guy} alt="avatar" />
                <p className="username">{userId.name}</p>
            </div>
            <p className="post-content font-weight-bold">{content}</p>
            <div className="likes">
                <i class="fa-regular fa-heart"></i>{" "}
                <span>{likes.length} Likes</span>
            </div>
        </div>
    );
}

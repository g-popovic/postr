import React, { useState } from "react";
import axios from "axios";
// import { useState } from "react";

export function Post() {
    const [data, setData] = useState({
        name: "",
        content: "",
        likes: "",
    });
    async function getData() {
        await axios.get("http://localhost:3001", (res) => {
            console.log(res);
        });
    }
    return (
        <div className="wrapper">
            <div className="username-container">
                <img
                    className="profile-img"
                    src="https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg"
                    alt="avatar"
                />
                <p className="username">{data.name}</p>
            </div>
            <p className="post-content font-weight-bold">{data.content}</p>
            <div className="likes">
                <i class="fa-regular fa-heart"></i>
                <span>{data.likes}Likes</span>
            </div>
        </div>
    );
}

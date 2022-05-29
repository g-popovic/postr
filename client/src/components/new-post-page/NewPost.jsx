import React from "react";
import { useState } from "react";
import { Navbar } from "../Reusable/Navbar";
import "./new-post.scss";
import axios from "axios";
export function NewPost() {
    const [text, setText] = useState("");
    async function sendData() {
        await axios.post("http:localhost/posts/new-post", {
            content: text,
        });
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="new-post-page">
            <div className="post-container">
                <Navbar />
                <div className="post-wrapper">
                    <h1>CREATE NEW POST</h1>
                    <textarea
                        type="text"
                        onChange={handleChange}
                        value={text}
                        autoComplete="off"
                        placeholder="What do you want to post about? Remember, you can only post once every 24 hours."
                        onSubmit={sendData}
                    />
                    <button>POST</button>
                </div>
            </div>
        </div>
    );
}

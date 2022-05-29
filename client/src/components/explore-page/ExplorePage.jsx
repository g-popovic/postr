import React, { useContext, useEffect } from "react";
import { UserContext } from "../../provider/UserContext";
import { Navbar } from "../Reusable/Navbar";
import { Post } from "../Reusable/Post";
import "./explore.scss";
import axios from "axios";

export function ExplorePage() {
    const [data, setData] = useContext(UserContext);
    async function getData() {
        try {
            await axios.get("http://localhost:3001/posts").then((res) => {
                console.log(res);
            });
        } catch (err) {
            console.log(err);
        }
    }
    getData();
    useEffect(() => {
        if (data.showLandingPageIntro) {
            setData({ ...data, showLandingPageIntro: false });
        }
    }, [data]);

    return (
        <>
            <div className="page-container" onClick={getData}>
                <Navbar />
                <div className="posts-container">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            {data.showLandingPageIntro && <div className="intro-overlay" />}
        </>
    );
}

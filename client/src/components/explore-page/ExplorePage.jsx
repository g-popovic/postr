import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../provider/UserContext";
import { Navbar } from "../Reusable/Navbar";
import { Post } from "../Reusable/Post";
import "./explore.scss";
import { axiosApp } from "../../util/config";
// import { set } from "mongoose";

export function ExplorePage() {
    const [data, setData] = useContext(UserContext);
    const [posts, setPosts] = useState();

    async function getAndFetchPosts() {
        try {
            const response = await axiosApp.get("/posts/all");
            setPosts(response.data.posts);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAndFetchPosts();
    }, []);

    useEffect(() => {
        if (data.showLandingPageIntro) {
            setTimeout(
                () => setData({ ...data, showLandingPageIntro: false }),
                2500
            );
        }
    }, [data]);

    return (
        <>
            <div className="page-container">
                <Navbar />
                <div className="posts-container">
                    {!posts ? (
                        <h4 className="text-center text-light h-100">
                            Loading...
                        </h4>
                    ) : (
                        posts.map((post) => <Post post={post} />)
                    )}
                </div>
            </div>
            {data.showLandingPageIntro && <div className="intro-overlay" />}
        </>
    );
}

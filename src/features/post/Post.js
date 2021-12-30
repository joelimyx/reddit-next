import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

export default function Post({id}) {
    const posts = useSelector(selectPosts);
    const post = posts[id];

    return (
        <li>
            <p>post.title</p>
        </li>
    )
}
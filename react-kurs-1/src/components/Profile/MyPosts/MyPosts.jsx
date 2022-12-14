import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: 'Hello, man', likesCount: 12},
        {id: 2, message: 'Hello, matherfucker', likesCount: 124}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={cl.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> New post</button>
                </div>
            </div>
            <div className={cl.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
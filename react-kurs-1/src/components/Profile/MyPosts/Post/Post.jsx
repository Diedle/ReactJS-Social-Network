import React from 'react';
import cl from './Post.module.css';

function Post(props) {
    return (
        <div className={cl.posts}>
            <div className={cl.item}>
                <img
                    src='https://fikiwiki.com/uploads/posts/2022-02/1644855652_39-fikiwiki-com-p-kartinki-khd-kachestva-42.jpg'/>
                {props.message}
                <div>
                    <span>like {props.likesCount}; </span>
                    <span>dislike</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
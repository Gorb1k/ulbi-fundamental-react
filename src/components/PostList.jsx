import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, onPostRemove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => {
                return <PostItem onPostRemove={onPostRemove} number={index+1} key={post.id} post={post}/>
            })}
        </div>
    );
};

export default PostList;
import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, onPostRemove}) => {

    if (!posts.length) {
        return (
            <h2 style={{textAlign:"center"}}>Постов нет!</h2>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition key={post.id}
                                   timeout={500}
                                   classNames='post'
                    >
                        <PostItem onPostRemove={onPostRemove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({onPostAdd}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        onPostAdd(newPost)
        setPost({...post, title: '', body: ''})
    }
    return (
        <form>
            {/*Управляемый инпут*/}
            <MyInput value={post.title}
                     onChange={(e) => {
                         setPost({...post, title: e.target.value})
                     }}
                     type="text"
                     placeholder={'Название поста'}/>
            <MyInput value={post.body}
                     onChange={(e) => {
                         setPost({...post, body: e.target.value})
                     }}
                     type="text"
                     placeholder={'Описание поста'}/>
            {/*Неуправляемый инпут*/}
            {/*<MyInput ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*         placeholder={'описание поста'}/>*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
import React, {useRef, useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', body: 'hello'},
        {id:2, title: 'Java', body: 'hello2'},
        {id:3, title: 'Python', body: 'hello3'},
        {id:4, title: 'Ruby', body: 'hello4'},
    ])
    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()
    const addNewPost = (e) => {
      e.preventDefault()
        console.log(title)
    }

    return (
        <div className="app">
            <form>
                <MyInput value={title}
                         onChange={(e) => {setTitle(e.currentTarget.value)}}
                         type="text"
                         placeholder={'Название поста'}/>
                <MyInput ref={bodyInputRef}
                    type="text"
                         placeholder={'описание поста'}/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов'}/>
        </div>
    );
}

export default App;

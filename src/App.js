import React, {useRef, useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'y'},
        {id: 2, title: 'Java', body: 'a'},
        {id: 3, title: 'Python', body: 'b'},
        {id: 4, title: 'Ruby', body: 'hello4'},
    ])
const [selectedSort, setSelectedSort] = useState('')
    const bodyInputRef = useRef()
    const onPostAdd = (post) => {
        setPosts([...posts, post])
    }
    const onPostRemove = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="app">
            <PostForm onPostAdd={onPostAdd}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}
                defaultValue={'Сортировка'}/>
            {posts.length !== 0
                ? <PostList onPostRemove={onPostRemove} posts={posts} title={'Список постов'}/>

                : <h2 style={{textAlign:"center"}}>Постов нет!</h2>}
        </div>
    );
}

export default App;

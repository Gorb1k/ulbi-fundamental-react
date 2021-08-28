import React, {useEffect, useRef, useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'y'},
        {id: 2, title: 'Java', body: 'a'},
        {id: 3, title: 'Python', body: 'b'},
        {id: 4, title: 'Ruby', body: 'hello4'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const bodyInputRef = useRef()
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const onPostAdd = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }
    const onPostRemove = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const fetchPosts = async () => {
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="app">
            <MyButton style={{marginTop:'30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm onPostAdd={onPostAdd}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList onPostRemove={onPostRemove} posts={sortedAndSearchedPosts} title={'Список постов'}/>

        </div>
    );
}

export default App;

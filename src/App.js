import React, {useMemo, useRef, useState} from "react";
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
    const [searchQuery, setSearchQuery] = useState('')
    const bodyInputRef = useRef()


    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[selectedSort, posts])
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.includes(searchQuery))
    },[searchQuery, posts])

    const onPostAdd = (post) => {
        setPosts([...posts, post])
    }
    const onPostRemove = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="app">
            <PostForm onPostAdd={onPostAdd}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput placeholder='Поиск' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                    defaultValue={'Сортировка'}/>
                {sortedAndSearchedPosts.length !== 0
                    ? <PostList onPostRemove={onPostRemove} posts={sortedAndSearchedPosts} title={'Список постов'}/>

                    : <h2 style={{textAlign:"center"}}>Постов нет!</h2>}
            </div>

        </div>
    );
}

export default App;

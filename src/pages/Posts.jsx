import React, {useEffect, useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

const Posts = ()  => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'y'},
        {id: 2, title: 'Java', body: 'a'},
        {id: 3, title: 'Python', body: 'b'},
        {id: 4, title: 'Ruby', body: 'hello4'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        console.log(totalCount)
    })




    const onPostAdd = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }
    const onPostRemove = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        fetchPosts()
    }, [page])
    return (
        <div className="app">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm onPostAdd={onPostAdd}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
            <h2>Произошла ошибка: {postError}</h2>
            }
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: "center", marginTop: 50}}><Loader/></div>
                : <PostList onPostRemove={onPostRemove} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
            <Pagination page={page} changePage={setPage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;

import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIemPage from "../pages/PostIemPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={'/about'} render={() => <About/>}/>
            <Route exact path={'/posts'} render={() => <Posts/>}/>
            <Route exact path={'/posts/:id'} render={() => <PostIemPage/>}/>
            <Route path={'/error'} render={() => <Error/>}/>
            <Route exact path={'/'} render={() => <Posts/>}/>
            <Redirect to={'/error'}/>
        </Switch>
    );
};

export default AppRouter;
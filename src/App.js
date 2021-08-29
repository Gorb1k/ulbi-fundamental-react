import React from "react";
import './styles/app.css'
import {BrowserRouter} from 'react-router-dom'
import NavBar from "./components/navbar/NavBar";
import AppRouter from "./components/AppRouter";

function App() {

    return (
        <BrowserRouter>
                <NavBar/>
                <AppRouter/>
        </BrowserRouter>

    );
}

export default App;

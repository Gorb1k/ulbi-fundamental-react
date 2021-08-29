import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className="navbar__links">
                <Link style={{marginRight:5}} to="/about"><MyButton>About</MyButton></Link>
                <Link to="/posts"><MyButton>Posts</MyButton></Link>
            </div>
        </div>
    );
};

export default NavBar;
import React from "react"
import "./Header.css"

function Header(props) {
    return (
        <h1 className="title"><span className="todo">todo</span><span className="list">list</span></h1>
    );
}

export default Header
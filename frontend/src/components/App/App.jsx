import React, {useEffect, useState} from 'react';
import './App.css';
import * as actions from "../../actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import Header from "../Header/Header";
import UserInput from "../UserInput/UserInput";
import {MoonLoader} from "react-spinners";
import TodoList from "../TodoList/TodoList";
import NoTodo from "../NoTodo/NoTodo";

function App(props) {
    useEffect(() => {
        props.fetchTodo();
    }, []);

    const [userInput, setUserInput] = useState("");

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    };

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        props.createTodo({task: userInput});
        setUserInput("")
    };

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-8 offset-2 text-center header">
                    <Header/>
                </div>
            </div>
            <div className="row mt-5">
                <div className={"container"}>
                    <div className="col-8 offset-2">
                        <UserInput value={userInput} onChange={handleUserInput} onSubmit={handleTodoSubmit}/>
                    </div>
                </div>
            </div>
            <div className="row">
                {props.commonState.loading ? (<div className="col-8 offset-2 d-flex justify-content-center">
                    <MoonLoader/>
                </div>) : (<div className="col-8 offset-2 d-block justify-content-center">
                    <TodoList/>
                </div>)}
            </div>
            {props.todoState.todo.length === 0 && !props.commonState.loading ? (<NoTodo/>) : null}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        commonState: state.commonState,
        todoState: state.todoState,
    };
}

export default connect(mapStateToProps, actions)(App);

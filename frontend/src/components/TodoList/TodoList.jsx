import React, {useState} from "react"
import TodoItem from "../TodoItem/TodoItem";
import * as actions from "../../actions";
import {connect} from "react-redux";

function TodoList(props) {
    let content = props.todoState.todo.map((item, i) => {
        let color = "bg-light";
        let complete = "";

        if (item.status) {
            if (item.status === true) {
                color = "text-white bg-success";
                complete = "complete"
            } else {
                color = "text-white bg-danger";
            }
        }

        return <TodoItem {...props} key={i} item={item} color={color} complete={complete}/>
    });
    return (
        <div>
            {content}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        commonState: state.commonState,
        todoState: state.todoState,
    };
}

export default connect(mapStateToProps, actions)(TodoList);
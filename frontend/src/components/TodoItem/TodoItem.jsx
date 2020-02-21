import React, {useState} from "react"
import {Icon} from "semantic-ui-react";
import "./TodoItem.css"
import * as actions from "../../actions";
import {connect} from "react-redux";

function TodoItem(props) {
    return (
        <div className={`card ${props.color} mb-3`}>
            <div className="card-header text-center">
                <p className={`${props.complete}`}>{props.item.task}</p>
            </div>
            <div className="card-body text-center pb-2">
                <div className="controls">
                    <Icon
                        name="check circle"
                        color="green"
                        className="icon"
                        onClick={() => props.completeTodo(props.item.id)}
                    />
                    <span style={{paddingRight: 10}}>Done</span>
                    <Icon
                        name="undo"
                        color="yellow"
                        className="icon"
                        onClick={() => props.undoTodo(props.item.id)}
                    />
                    <span style={{paddingRight: 10}}>Undo</span>
                    <Icon
                        name="delete"
                        color="red"
                        className="icon"
                        onClick={() => props.deleteTodo(props.item.id)}
                    />
                    <span style={{paddingRight: 10}}>Delete</span>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        commonState: state.commonState,
        todoState: state.todoState,
    };
}

export default connect(mapStateToProps, actions)(TodoItem);
import React from "react"

function UserInput(props) {
    return (
        <form className="form form-group" onSubmit={props.onSubmit}>
            <input autoComplete="off" className="form-control" name="task" value={props.value}
                   onChange={props.onChange}
                   placeholder="Create TodoList"
                   type="text"/>
        </form>
    );
}

export default UserInput
import {FETCH_TODO, SET_LOADING} from "./types";

const {HelloServiceClient} = require("../api/hello/hello_service_grpc_web_pb");
const {HelloRequest} = require("../api/hello/hello_service_pb");

let helloClient = new HelloServiceClient("http://localhost:9090", null, null);

export const setLoading = (value) => {
  return dispatch => {
      dispatch({action: SET_LOADING, payload: value})
  }
};

const {TodoServiceClient} = require("../api/todo/todo_service_grpc_web_pb");
const {TodoRequest, CommonRequest} = require("../api/todo/todo_service_pb");

let todoClient = new TodoServiceClient("http://localhost:9090", null, null);

export const fetchTodo = () => {
    return dispatch => {
        let req = new CommonRequest();

        dispatch({type: SET_LOADING, payload: true});
        todoClient.getAllTodo(req, {}, (err, resp) => {
            if (resp == null) {
                console.log(err)
            }else {
                dispatch({type: FETCH_TODO, payload: resp.toObject().todoListList});
                dispatch({type: SET_LOADING, payload: false});
            }
        })
    }
};

export const completeTodo = (id) => {
    return dispatch => {
        let req = new CommonRequest();
        req.setId(id);

        dispatch({type: SET_LOADING, payload: true});
        todoClient.completeTodo(req, {}, (err, resp) => {
            if (resp == null) {
                console.log(err)
            }else {
                let req = new CommonRequest();

                todoClient.getAllTodo(req, {}, (err, resp) => {
                    if (resp == null) {
                        console.log(err)
                    }else {
                        dispatch({type: FETCH_TODO, payload: resp.toObject().todoListList});
                        dispatch({type: SET_LOADING, payload: false});
                    }
                });
            }
        })
    }
};

export const undoTodo = (id) => {
    return dispatch => {
        let req = new CommonRequest();
        req.setId(id);

        dispatch({type: SET_LOADING, payload: true});
        todoClient.undoTodo(req, {}, (err, resp) => {
            if (resp == null) {
                console.log(err)
            }else {
                let req = new CommonRequest();

                todoClient.getAllTodo(req, {}, (err, resp) => {
                    if (resp == null) {
                        console.log(err)
                    }else {
                        dispatch({type: FETCH_TODO, payload: resp.toObject().todoListList});
                        dispatch({type: SET_LOADING, payload: false});
                    }
                });
            }
        })
    }
};

export const deleteTodo = (id) => {
    return dispatch => {
        let req = new CommonRequest();
        req.setId(id);

        dispatch({type: SET_LOADING, payload: true});
        todoClient.deleteTodo(req, {}, (err, resp) => {
            if (resp == null) {
                console.log(err)
            }else {
                let req = new CommonRequest();

                todoClient.getAllTodo(req, {}, (err, resp) => {
                    if (resp == null) {
                        console.log(err)
                    }else {
                        dispatch({type: FETCH_TODO, payload: resp.toObject().todoListList});
                        dispatch({type: SET_LOADING, payload: false});
                    }
                });
            }
        })
    }
};

export const createTodo = (data) => {
    return dispatch => {
        let req = new TodoRequest();

        req.setTask(data.task);

        dispatch({type: SET_LOADING, payload: true});

        todoClient.createTodo(req, {}, (err, resp) => {
            if (resp == null) {
                console.log(err)
            }else {
                let req = new CommonRequest();

                todoClient.getAllTodo(req, {}, (err, resp) => {
                    if (resp == null) {
                        console.log(err)
                    }else {
                        dispatch({type: FETCH_TODO, payload: resp.toObject().todoListList});
                        dispatch({type: SET_LOADING, payload: false});
                    }
                });
            }
        });
    }
};
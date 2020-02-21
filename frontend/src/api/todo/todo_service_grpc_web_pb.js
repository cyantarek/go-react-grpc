/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/*eslint-disable*/


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.AllTodoResponse>}
 */
const methodDescriptor_TodoService_GetAllTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/GetAllTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.CommonRequest,
  proto.todo.AllTodoResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.AllTodoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.AllTodoResponse>}
 */
const methodInfo_TodoService_GetAllTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.AllTodoResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.AllTodoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.AllTodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.AllTodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.getAllTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/GetAllTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAllTodo,
      callback);
};


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.AllTodoResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.getAllTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/GetAllTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetAllTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoRequest,
 *   !proto.todo.TodoResponse>}
 */
const methodDescriptor_TodoService_CreateTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/CreateTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoRequest,
  proto.todo.TodoResponse,
  /**
   * @param {!proto.todo.TodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.TodoRequest,
 *   !proto.todo.TodoResponse>}
 */
const methodInfo_TodoService_CreateTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.TodoResponse,
  /**
   * @param {!proto.todo.TodoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.TodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.TodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.createTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/CreateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CreateTodo,
      callback);
};


/**
 * @param {!proto.todo.TodoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.createTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/CreateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CreateTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodDescriptor_TodoService_CompleteTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/CompleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.CommonRequest,
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodInfo_TodoService_CompleteTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.completeTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/CompleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CompleteTodo,
      callback);
};


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CommonResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.completeTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/CompleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_CompleteTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodDescriptor_TodoService_UndoTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/UndoTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.CommonRequest,
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodInfo_TodoService_UndoTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.undoTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/UndoTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_UndoTodo,
      callback);
};


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CommonResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.undoTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/UndoTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_UndoTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodDescriptor_TodoService_DeleteTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/DeleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.CommonRequest,
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.CommonRequest,
 *   !proto.todo.CommonResponse>}
 */
const methodInfo_TodoService_DeleteTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.CommonResponse,
  /**
   * @param {!proto.todo.CommonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.CommonResponse.deserializeBinary
);


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.CommonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.CommonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo,
      callback);
};


/**
 * @param {!proto.todo.CommonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.CommonResponse>}
 *     A native promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo);
};


module.exports = proto.todo;


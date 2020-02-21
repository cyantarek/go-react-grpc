package todo_service

import (
	"backend/api/todo"
	"backend/internal/domains"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/net/context"
	"time"
)


func (t *todoService) CompleteTodo(ctx context.Context, req *todo.CommonRequest) (*todo.CommonResponse, error) {
	id, err := primitive.ObjectIDFromHex(req.Id)
	if err != nil {
		return nil, err
	}
	
	err = t.todoRepo.Update(primitive.M{"_id": id}, primitive.M{"$set": primitive.M{"status": true}})
	if err != nil {
		return nil, err
	}
	
	return &todo.CommonResponse{
		Message:              "completed",
	}, nil
}

func (t *todoService) DeleteTodo(ctx context.Context, req *todo.CommonRequest) (*todo.CommonResponse, error) {
	id, err := primitive.ObjectIDFromHex(req.Id)
	if err != nil {
		return nil, err
	}
	
	err = t.todoRepo.DeleteOne(id)
	if err != nil {
		return nil, err
	}
	
	return &todo.CommonResponse{
		Message:              "deleted",
	}, nil
}

func (t *todoService) UndoTodo(ctx context.Context, req *todo.CommonRequest) (*todo.CommonResponse, error) {
	id, err := primitive.ObjectIDFromHex(req.Id)
	if err != nil {
		return nil, err
	}
	
	err = t.todoRepo.Update(primitive.M{"_id": id}, primitive.M{"$set": primitive.M{"status": false}})
	if err != nil {
		return nil, err
	}
	
	return &todo.CommonResponse{
		Message:              "completed",
	}, nil
}

func (t *todoService) GetAllTodo(ctx context.Context, req *todo.CommonRequest) (*todo.AllTodoResponse, error) {
	allTodo := t.todoRepo.GetAll()
	
	var out todo.AllTodoResponse
	
	for _, v := range allTodo {
		out.TodoList = append(out.TodoList, &todo.TodoResponse{
			Id:                   v.Id.Hex(),
			Task:                 v.Task,
			Status:               v.Status,
			CreatedAt:            v.CreatedAt,
			UpdatedAt:            v.UpdatedAt,
		})
	}
	
	return &out, nil
}

func (t *todoService) CreateTodo(ctx context.Context, req *todo.TodoRequest) (*todo.TodoResponse, error) {
	newTodo := domains.Todo{
		Id:        primitive.NewObjectID(),
		Task:      req.Task,
		Status:    false,
		CreatedAt: time.Now().Format(time.RFC3339),
		UpdatedAt: time.Now().Format(time.RFC3339),
	}
	
	err := t.todoRepo.InsertOne(newTodo)
	if err != nil {
		return nil, err
	}
	
	return &todo.TodoResponse{
		Id:                   newTodo.Id.String(),
		Task:                 newTodo.Task,
		Status:               newTodo.Status,
		CreatedAt:            newTodo.CreatedAt,
		UpdatedAt:            newTodo.UpdatedAt,
	}, nil
}
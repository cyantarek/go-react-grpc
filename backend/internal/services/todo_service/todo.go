package todo_service

import (
	"backend/internal/domains"
)

// Server represents the actual grpc server implementation
type todoService struct {
	todoRepo domains.TodoRepository
}

// New constructs the server and returns it
func New(todoRepo domains.TodoRepository) (*todoService, error) {
	srv := todoService{
		todoRepo:todoRepo,
	}
	
	return &srv, nil
}
package hello_service

import (
	"backend/api/hello"
	"golang.org/x/net/context"
)

func (h *helloService) SayHello(ctx context.Context, req *hello.HelloRequest) (*hello.HelloResponse, error) {
	return &hello.HelloResponse{
		Message:              "Hello" + req.Name,
	}, nil
}
package main

import (
	"backend/api/hello"
	"backend/config"
	"backend/internal/services/hello_service"
	"backend/pkg/utilities"
	"fmt"
	"github.com/jinzhu/configor"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
)

func main() {
	cfg := loadConfig()
	
	addr := fmt.Sprintf("%s:%s", cfg.Server.Grpc.Host, cfg.Server.Grpc.Port)
	
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatal(err)
	}
	
	gRPCServer := grpc.NewServer()
	
	helloHandlers, _ := hello_service.New()
	hello.RegisterHelloServiceServer(gRPCServer, helloHandlers)
	
	reflection.Register(gRPCServer)
	
	fmt.Println("gRPC server started")
	if err := gRPCServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}

func loadConfig() config.Config {
	var cfg config.Config
	env := utilities.GetEnv("ENV", "dev")
	
	switch env {
	case "dev":
		err := configor.Load(&cfg, "config/config.dev.yml")
		if err != nil {
			log.Fatal(err)
		}
	case "prod":
		err := configor.Load(&cfg, "config/config.prod.yml")
		if err != nil {
			log.Fatal(err)
		}
	}
	
	return cfg
}

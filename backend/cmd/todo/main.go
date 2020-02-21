package main

import (
	"backend/api/hello"
	"backend/api/todo"
	"backend/config"
	"backend/internal/db/mongodb"
	"backend/internal/services/hello_service"
	"backend/internal/services/todo_service"
	"backend/pkg/utilities"
	"context"
	"fmt"
	"github.com/jinzhu/configor"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"os"
	"time"
)

var (
	MongoUrl = ""
	DbName = "todo_db"
	todoCollection = "todo"
	Port = "5000"
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
	
	if os.Getenv("MONGO_URL") != "" {
		MongoUrl = os.Getenv("MONGO_URL")
	}
	
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(MongoUrl))
	if err != nil {
		log.Fatal(err)
	}
	
	todoDb := mongodb.NewTodoService(client.Database(DbName).Collection(todoCollection))
	
	todoHandlers, _ := todo_service.New(todoDb)
	todo.RegisterTodoServiceServer(gRPCServer, todoHandlers)
	
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
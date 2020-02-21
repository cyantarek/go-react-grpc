package mongodb

import (
	"backend/internal/domains"
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type TodoDataLayer struct {
	todo *mongo.Collection
}

func (h *TodoDataLayer) GetAll() []domains.Todo {
	cur, err := h.todo.Find(context.Background(), primitive.D{})
	if err != nil {
		fmt.Println(err)
		return nil
	}
	
	var out []domains.Todo
	var t domains.Todo
	for cur.Next(context.Background()) {
		err := cur.Decode(&t)
		if err != nil {
			fmt.Println(err)
			return nil
		}
		
		out = append(out, t)
	}
	
	if cur.Err() != nil {
		fmt.Println(err)
		return nil
	}
	
	return out
}

func (h *TodoDataLayer) InsertOne(t domains.Todo) error {
	_, err := h.todo.InsertOne(context.Background(), t)
	if err != nil {
		return err
	}
	
	return nil
}

func (h *TodoDataLayer) Update(filter, update primitive.M) error {
	_, err := h.todo.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return err
	}
	
	return nil
}

func (h *TodoDataLayer) DeleteOne(id primitive.ObjectID) error {
	_, err := h.todo.DeleteOne(context.Background(), primitive.M{"_id": id})
	if err != nil {
		return err
	}
	
	return nil
}

func (h *TodoDataLayer) DeleteAll() error {
	_, err := h.todo.DeleteMany(context.Background(), primitive.D{})
	if err != nil {
		return err
	}
	
	return nil
}

func NewTodoService(coll *mongo.Collection) *TodoDataLayer {
	return &TodoDataLayer{todo: coll}
}

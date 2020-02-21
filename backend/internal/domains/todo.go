package domains

import "go.mongodb.org/mongo-driver/bson/primitive"

type Todo struct {
	Id        primitive.ObjectID `json:"id" bson:"_id"`
	Task      string             `json:"task"`
	Status    bool               `json:"status"`
	CreatedAt string             `json:"created_at"`
	UpdatedAt string             `json:"updated_at"`
}

type TodoRepository interface {
	GetAll() []Todo
	InsertOne(t Todo) error
	Update(filter, update primitive.M) error
	DeleteOne(id primitive.ObjectID) error
	DeleteAll() error
}
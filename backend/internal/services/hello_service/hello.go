package hello_service

// Server represents the actual grpc server implementation
type helloService struct {
}

// New constructs the server and returns it
func New() (*helloService, error) {
	srv := helloService{
	}
	
	return &srv, nil
}
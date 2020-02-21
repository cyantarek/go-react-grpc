.PHONY: proto

proto:
	protoc -I ./proto --go_out=plugins=grpc:backend/api/todo --js_out=import_style=commonjs:frontend/src/api/todo --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/api/todo proto/todo_*.proto
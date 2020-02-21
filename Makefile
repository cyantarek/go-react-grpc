.PHONY: proto

proto:
	protoc -I ./proto --go_out=plugins=grpc:backend/api/hello --js_out=import_style=commonjs:frontend/src/api/hello --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/api/hello proto/hello_*.proto
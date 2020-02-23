.PHONY: proto kubernetes-redeploy

proto:
	protoc -I ./proto --go_out=plugins=grpc:backend/api/todo --js_out=import_style=commonjs:frontend/src/api/todo --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/api/todo proto/todo_*.proto

dockerize-all: dockerize-frontend dockerize-backend

dockerize-frontend:
	docker build -t tarek5/todo-grpc-frontend:latest --no-cache -f frontend/Dockerfile .
	docker image push tarek5/todo-grpc-frontend:latest

dockerize-envoy:
	docker build -t tarek5/todo-grpc-envoy:latest --no-cache -f envoy-proxy/Dockerfile .
	docker image push tarek5/todo-grpc-envoy:latest

dockerize-backend:
	docker build -t tarek5/todo-grpc-backend:latest --no-cache -f backend/build/docker/Dockerfile .
	docker image push tarek5/todo-grpc-backend:latest

kubernetes-deploy:
	kubectl apply -f frontend/frontend-deployment.yml
	kubectl apply -f backend/build/kubernetes/backend-deployment.yml
	#kubectl apply -f envoy-proxy/envoy-deployment.yml

kubernetes-destroy:
	kubectl delete -f frontend/frontend-deployment.yml
	kubectl delete -f backend/build/kubernetes/backend-deployment.yml
	#kubectl delete -f envoy-proxy/envoy-deployment.yml

kubernetes-redeploy:
	kubectl patch deployment todo-backend-deployment -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"build\":\"${RANDOM}\"}}}}}"
	kubectl patch deployment todo-frontend-deployment -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"build\":\"${RANDOM}\"}}}}}"
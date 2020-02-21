.PHONY: proto build

proto:
	mkdir -p "api/proto/hello" && protoc -I api/proto --go_out=plugins=grpc:api/proto/hello --js_out=import_style=commonjs:api/proto/hello --grpc-web_out=import_style=commonjs,mode=grpcwebtext:api/proto/hello api/proto/hello_*.proto

build:
	docker build -t tarek5/mail-core -f build/docker/Dockerfile .

build-backend:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 GO111MODULE=on go build -mod=vendor -o backend

deploy-native: build-backend
	git add . && git commit -m $$msg && git push heroku master

deploy-docker: build-backend
	heroku container:push web && heroku container:release web

generate-mock:
	mockgen -source=db.go -destination=mock/db_mock.go -package=mock

generate-sender-mocks:
	mockgen -source=internal/server/apis.go -destination=internal/pkg/mocks/sender_api_mocks.go -package=mocks SenderWorker

generate-smtpreq-mocks:
	mockgen -source=internal/services/sender/apis.go -destination=internal/pkg/mocks/smtpreq_api_mocks.go -package=mocks SMTPRequester

test:
	go test -v mail-core/internal/server

test-cover:
	go test -coverprofile=assets/coverage/cover.out -coverpkg=mail-core/internal/server mail-core/internal/server

# heroku git:remote -a APP_NAME
# todo: write gRPC unit tests
# heroku docker deployment

# go mod init
# go mod tidy
# go mod vendor
# go mod edit -replace gitlab.com/cupidmail-engine/cupid-buffers=../cupid-buffers (make sure you 'go mod init' in that folder too)
# go build -mod=vendor
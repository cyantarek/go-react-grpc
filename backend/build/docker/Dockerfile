FROM golang:latest as builder
COPY backend /todo/
WORKDIR /todo
RUN cd cmd/todo && CGO_ENABLED=0 GOOS=linux go build -ldflags "-s -w" -o todo
RUN chmod +x cmd/todo

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /todo .
EXPOSE 5200

ENTRYPOINT [ "./cmd/todo/todo" ]
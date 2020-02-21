package hello_service

import (
	"backend/api/hello"
	"golang.org/x/net/context"
	"reflect"
	"testing"
)

func Test_helloService_SayHello(t *testing.T) {
	type args struct {
		ctx context.Context
		req *hello.HelloRequest
	}
	tests := []struct {
		name    string
		args    args
		want    *hello.HelloResponse
		wantErr bool
	}{
		{
			name: "hello response expected",
			args:args{
				ctx: context.Background(),
				req: &hello.HelloRequest{
					Name:                 "Cyan Tarek",
				},
			},
			want: &hello.HelloResponse{
				Message:              "Hello Cyan Tarek",
			},
			wantErr:false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			h := &helloService{}
			got, err := h.SayHello(tt.args.ctx, tt.args.req)
			if (err != nil) != tt.wantErr {
				t.Errorf("SayHello() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("SayHello() got = %v, want %v", got, tt.want)
			}
		})
	}
}
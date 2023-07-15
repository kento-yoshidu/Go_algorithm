package axx

import (
	"testing"
)

func Test_linear_search(t *testing.T) {
	type args struct {
		n   int
		x   int
		arr []int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 5, x: 40, arr: []int{10, 20, 30, 40, 50}},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: 6, x: 28, arr: []int{30, 10, 40, 10, 50, 90}},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A02_linear_search(tt.args.n, tt.args.x, tt.args.arr); got != tt.want {
				t.Errorf("linear_search() = %v, want %v", got, tt.want)
			}
		})
	}
}

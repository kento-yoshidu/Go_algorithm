package abc310

import (
	"testing"
)

func Test_order_something_else(t *testing.T) {
	type args struct {
		n, p, q int
		d       []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 3, p: 100, q: 50, d: []int{60, 20, 40}},
			want: 70,
		},
		{
			name: "second",
			args: args{n: 3, p: 100, q: 50, d: []int{60000, 20000, 40000}},
			want: 100,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_order_something_else(tt.args.n, tt.args.p, tt.args.q, tt.args.d); got != tt.want {
				t.Errorf("A_order_something_else() = %v, want %v", got, tt.want)
			}
		})
	}
}

package abc272

import (
	"testing"
)

func Test_integer_sum(t *testing.T) {
	type args struct {
		n int
		a []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 3, a: []int{2, 7, 2}},
			want: 11,
		},
		{
			name: "second",
			args: args{n: 1, a: []int{3}},
			want: 3,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_integer_sum(tt.args.n, tt.args.a); got != tt.want {
				t.Errorf("A_integer_sum() = %v, want %v", got, tt.want)
			}
		})
	}
}

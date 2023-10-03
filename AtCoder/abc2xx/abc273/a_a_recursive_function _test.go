package abc273

import (
	"testing"
)

func Test_exponential_or_quadratic(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 2},
			want: 2,
		},
		{
			name: "second",
			args: args{n: 3},
			want: 6,
		},
		{
			name: "third",
			args: args{n: 0},
			want: 1,
		},
		{
			name: "4th",
			args: args{n: 10},
			want: 3628800,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_a_recursive_function(tt.args.n); got != tt.want {
				t.Errorf("A_a_recursive_function() = %v, want %v", got, tt.want)
			}
		})
	}
}

package axx

import (
	"testing"
)

func Test_the_first_problem(t *testing.T) {
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
			want: 4,
		},
		{
			name: "second",
			args: args{n: 8},
			want: 64,
		},
		{
			name: "third",
			args: args{n: 100},
			want: 10000,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A01_the_first_problem(tt.args.n); got != tt.want {
				t.Errorf("the_first_book() = %v, want %v", got, tt.want)
			}
		})
	}
}

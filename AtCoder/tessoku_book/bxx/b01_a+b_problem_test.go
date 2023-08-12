package tessoku_bxx

import (
	"testing"
)

func Test_a_plus_b_problem(t *testing.T) {
	type args struct {
		a, b int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{a: 1, b: 2},
			want: 3,
		},
		{
			name: "second",
			args: args{a: 77, b: 23},
			want: 100,
		},
		{
			name: "third",
			args: args{a: 100, b: 100},
			want: 200,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B01_a_plus_b_problem(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("a_plus_b_problem() = %v, want %v", got, tt.want)
			}
		})
	}
}

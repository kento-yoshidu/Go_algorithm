package abc022

import (
	"testing"
)

func Test_nine_nine(t *testing.T) {
	type args struct {
		n, s, t int
		w       []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 5, s: 60, t: 70, w: []int{50, 10, 10, 10, 10}},
			want: 2,
		},
		{
			name: "second",
			args: args{n: 5, s: 50, t: 100, w: []int{120, -10, -20, -30, 70}},
			want: 2,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_best_body(tt.args.n, tt.args.s, tt.args.t, tt.args.w); got != tt.want {
				t.Errorf("a_best_body() = %v, want %v", got, tt.want)
			}
		})
	}
}

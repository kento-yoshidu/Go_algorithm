// https://atcoder.jp/contests/abc300/tasks/abc300_a

package abc300

import (
	"testing"
)

func Test_rated_for_me(t *testing.T) {
	type args struct {
		n int
		a int
		b int
		c []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 3, a: 125, b: 175, c: []int{200, 300, 400}},
			want: 2,
		},
		{
			name: "second",
			args: args{n: 1, a: 1, b: 1, c: []int{2}},
			want: 1,
		},
		{
			name: "third",
			args: args{n: 5, a: 123, b: 456, c: []int{135, 246, 357, 468, 579}},
			want: 5,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_n_choice_question(tt.args.n, tt.args.a, tt.args.b, tt.args.c); got != tt.want {
				t.Errorf("rated_for_me() = %v, want %v", got, tt.want)
			}
		})
	}
}

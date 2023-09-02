// https://atcoder.jp/contests/abc317/tasks/abc317_a

package abc317

import (
	"testing"
)

func Test_roulette(t *testing.T) {
	type args struct {
		n, h, x int
		p       []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 3, h: 100, x: 200, p: []int{50, 200, 999}},
			want: 2,
		},
		{
			name: "second",
			args: args{n: 2, h: 10, x: 21, p: []int{10, 999}},
			want: 2,
		},
		{
			name: "third",
			args: args{n: 10, h: 500, x: 999, p: []int{38, 420, 490, 585, 613, 614, 760, 926, 945, 999}},
			want: 4,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_potions(tt.args.n, tt.args.h, tt.args.x, tt.args.p); got != tt.want {
				t.Errorf("A_potions() = %v, want %v", got, tt.want)
			}
		})
	}
}

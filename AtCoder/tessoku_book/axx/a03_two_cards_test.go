// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_d

package axx

import (
	"testing"
)

func Test_two_cards(t *testing.T) {
	type args struct {
		n int
		x int
		p []int
		q []int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 3, x: 100, p: []int{17, 57, 99}, q: []int{10, 36, 53}},
			want: "No",
		},
		{
			name: "second",
			args: args{n: 5, x: 53, p: []int{10, 20, 30, 40, 50}, q: []int{1, 2, 3, 4, 5}},
			want: "Yes",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A03_two_cards(tt.args.n, tt.args.x, tt.args.p, tt.args.q); got != tt.want {
				t.Errorf("two_cards() = %v, want %v", got, tt.want)
			}
		})
	}
}

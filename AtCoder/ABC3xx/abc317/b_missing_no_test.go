// https://atcoder.jp/contests/abc317/tasks/abc317_a

package abc317

import (
	"testing"
)

func Test_missing_no(t *testing.T) {
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
			args: args{n: 3, a: []int{2, 3, 5}},
			want: 4,
		},
		{
			name: "second",
			args: args{n: 8, a: []int{3, 1, 4, 5, 9, 2, 6, 8}},
			want: 7,
		},
		{
			name: "third",
			args: args{n: 16, a: []int{152, 153, 154, 147, 148, 149, 158, 159, 160, 155, 156, 157, 144, 145, 146, 150}},
			want: 151,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_missing_no(tt.args.n, tt.args.a); got != tt.want {
				t.Errorf("B_missing_no() = %v, want %v", got, tt.want)
			}
		})
	}
}

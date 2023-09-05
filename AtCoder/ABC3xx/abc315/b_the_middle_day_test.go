// https://atcoder.jp/contests/abc315/tasks/abc315_b

package abc315

import (
	"reflect"
	"testing"
)

func Test_the_middle_day(t *testing.T) {
	type args struct {
		m int
		d []int
	}

	tests := []struct {
		name string
		args args
		want []int
	}{
		{
			name: "first",
			args: args{m: 12, d: []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}},
			want: []int{7, 2},
		},
		{
			name: "second",
			args: args{m: 1, d: []int{1}},
			want: []int{1, 1},
		},
		{
			name: "third",
			args: args{m: 6, d: []int{3, 1, 4, 1, 5, 9}},
			want: []int{5, 3},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_the_middle_day(tt.args.m, tt.args.d); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("B_the_middle_day() = %v, want %v", got, tt.want)
			}
		})
	}
}

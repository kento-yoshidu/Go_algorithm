package abc051

import (
	"testing"
)

func Test_sum_of_three_integers(t *testing.T) {
	type args struct {
		k, s int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{k: 2, s: 2},
			want: 6,
		},
		{
			name: "second",
			args: args{k: 5, s: 15},
			want: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_sum_of_three_integers(tt.args.k, tt.args.s); got != tt.want {
				t.Errorf("B_sum_of_three_integers() = %v, want %v", got, tt.want)
			}
		})
	}
}

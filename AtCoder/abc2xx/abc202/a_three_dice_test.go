package abc202

import (
	"testing"
)

func Test_three_dice(t *testing.T) {
	type args struct {
		a, b, c int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{a: 1, b: 4, c: 3},
			want: 13,
		},
		{
			name: "second",
			args: args{a: 5, b: 6, c: 4},
			want: 6,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_three_dice(tt.args.a, tt.args.b, tt.args.c); got != tt.want {
				t.Errorf("A_three_dice() = %v, want %v", got, tt.want)
			}
		})
	}
}

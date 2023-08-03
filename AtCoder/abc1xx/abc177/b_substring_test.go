package abc177

import (
	"testing"
)

func TestMultiplication(t *testing.T) {
	type args struct {
		s, t string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{s: "cabacc", t: "abc"},
			want: 1,
		},
		{
			name: "second",
			args: args{s: "codeforces", t: "atcoder"},
			want: 6,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_substring(tt.args.s, tt.args.t); got != tt.want {
				t.Errorf("Multiplication() = %v, want %v", got, tt.want)
			}
		})
	}
}

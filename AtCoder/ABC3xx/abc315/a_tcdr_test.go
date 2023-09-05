package abc315

import (
	"testing"
)

func Test_roulette(t *testing.T) {
	type args struct {
		s string
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{s: "atcoder"},
			want: "tcdr",
		},
		{
			name: "second",
			args: args{s: "xyz"},
			want: "xyz",
		},
		{
			name: "third",
			args: args{s: "aaaabbbbcccc"},
			want: "bbbbcccc",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_tcdr(tt.args.s); got != tt.want {
				t.Errorf("A_tcdr() = %v, want %v", got, tt.want)
			}
		})
	}
}

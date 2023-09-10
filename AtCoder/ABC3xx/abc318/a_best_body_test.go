package abc318

import (
	"testing"
)

func Test_missing_no(t *testing.T) {
	type args struct {
		n, m, p int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 13, m: 3, p: 5},
			want: 3,
		},
		{
			name: "second",
			args: args{n: 5, m: 6, p: 6},
			want: 0,
		},
		{
			name: "third",
			args: args{n: 200000, m: 314, p: 318},
			want: 628,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_full_moon(tt.args.n, tt.args.m, tt.args.p); got != tt.want {
				t.Errorf("A_full_moon() = %v, want %v", got, tt.want)
			}
		})
	}
}

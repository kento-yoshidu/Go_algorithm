package abc259

import (
	"testing"
)

func Test_growth_record(t *testing.T) {
	type args struct {
		n, m, x, t, d uint
	}

	tests := []struct {
		name string
		args args
		want uint
	}{
		{
			name: "first",
			args: args{n: 38, m: 20, x: 17, t: 168, d: 3},
			want: 168,
		},
		{
			name: "second",
			args: args{n: 1, m: 0, x: 1, t: 3, d: 2},
			want: 1,
		},
		{
			name: "third",
			args: args{n: 100, m: 10, x: 100, t: 180, d: 1},
			want: 90,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_growth_record(tt.args.n, tt.args.m, tt.args.x, tt.args.t, tt.args.d); got != tt.want {
				t.Errorf("A_growth_record() = %v, want %v", got, tt.want)
			}
		})
	}
}

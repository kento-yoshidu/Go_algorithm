package abc239

import (
	"testing"
)

func Test_horizon(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want float64
	}{
		{
			name: "first",
			args: args{n: 333},
			want: 65287.9076782217,
		},
		{
			name: "second",
			args: args{n: 634},
			want: 90086.63583462311,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_horizon(tt.args.n); got != tt.want {
				t.Errorf("A_not_overflow() = %v, want %v", got, tt.want)
			}
		})
	}
}

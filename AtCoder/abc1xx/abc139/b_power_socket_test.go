package abc139

import (
	"testing"
)

func Test_power_socket(t *testing.T) {
	type args struct {
		a, b int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{a: 4, b: 10},
			want: 3,
		},
		{
			name: "second",
			args: args{a: 8, b: 9},
			want: 2,
		},
		{
			name: "third",
			args: args{a: 8, b: 8},
			want: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_power_socket(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("B_power_socket() = %v, want %v", got, tt.want)
			}
		})
	}
}

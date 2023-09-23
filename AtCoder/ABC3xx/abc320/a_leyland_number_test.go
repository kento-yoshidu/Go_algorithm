package abc320

import (
	"testing"
)

func Test_leyland_number(t *testing.T) {
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
			args: args{a: 2, b: 8},
			want: 320,
		},
		{
			name: "second",
			args: args{a: 9, b: 9},
			want: 774840978,
		},
		{
			name: "third",
			args: args{a: 5, b: 6},
			want: 23401,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_leyland_number(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("A_leyland_number() = %v, want %v", got, tt.want)
			}
		})
	}
}

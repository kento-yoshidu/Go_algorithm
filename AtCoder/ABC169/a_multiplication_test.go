package abc169

import (
	"testing"
)

func TestMultiplication(t *testing.T) {
	type args struct {
		a int32
		b int32
	}

	tests := []struct {
		name string
		args args
		want int32
	}{
		{
			name: "first",
			args: args{a: 2, b: 5},
			want: 10,
		},
		{
			name: "second",
			args: args{a: 100, b: 100},
			want: 10000,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := multiplication(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Multiplication() = %v, want %v", got, tt.want)
			}
		})
	}
}

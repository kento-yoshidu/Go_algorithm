package abc203

import (
	"testing"
)

func Test_chinchirorin(t *testing.T) {
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
			args: args{a: 2, b: 5, c: 2},
			want: 5,
		},
		{
			name: "second",
			args: args{a: 4, b: 5, c: 6},
			want: 0,
		},
		{
			name: "third",
			args: args{a: 1, b: 1, c: 1},
			want: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_chinchirorin(tt.args.a, tt.args.b, tt.args.c); got != tt.want {
				t.Errorf("A_chinchirorin() = %v, want %v", got, tt.want)
			}
		})
	}
}

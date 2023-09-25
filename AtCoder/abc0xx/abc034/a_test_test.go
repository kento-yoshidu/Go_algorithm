package abc034

import (
	"testing"
)

func Test_test(t *testing.T) {
	type args struct {
		x, y int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{x: 12, y: 34},
			want: "Better",
		},
		{
			name: "second",
			args: args{x: 98, y: 56},
			want: "Worse",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_test(tt.args.x, tt.args.y); got != tt.want {
				t.Errorf("test() = %v, want %v", got, tt.want)
			}
		})
	}
}

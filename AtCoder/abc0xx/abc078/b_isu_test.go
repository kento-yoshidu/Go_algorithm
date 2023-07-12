package abc078

import (
	"testing"
)

func Test_nine_nine(t *testing.T) {
	type args struct {
		x int
		y int
		z int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{x: 13, y: 3, z: 1},
			want: 3,
		},
		{
			name: "second",
			args: args{x: 12, y: 3, z: 1},
			want: 2,
		},
		{
			name: "third",
			args: args{x: 100000, y: 1, z: 1},
			want: 49999,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_isu(tt.args.x, tt.args.y, tt.args.z); got != tt.want {
				t.Errorf("B_isu() = %v, want %v", got, tt.want)
			}
		})
	}
}

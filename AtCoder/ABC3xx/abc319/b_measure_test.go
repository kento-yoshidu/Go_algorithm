package abc319

import (
	"testing"
)

func Test_measure(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 12},
			want: "1-643-2-346-1",
		},
		{
			name: "second",
			args: args{n: 7},
			want: "17777771",
		},
		{
			name: "third",
			args: args{n: 1},
			want: "11",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_measure(tt.args.n); got != tt.want {
				t.Errorf("B_measure() = %v, want %v", got, tt.want)
			}
		})
	}
}

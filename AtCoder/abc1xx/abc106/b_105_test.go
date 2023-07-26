package abc106

import (
	"testing"
)

func Test_105(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 105},
			want: 1,
		},
		{
			name: "second",
			args: args{n: 7},
			want: 0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_105(tt.args.n); got != tt.want {
				t.Errorf("105() = %v, want %v", got, tt.want)
			}
		})
	}
}

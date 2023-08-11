package abc306

import (
	"testing"
)

func Test_base_2(t *testing.T) {
	type args struct {
		n []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: []int{1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}},
			want: 13,
		},
		{
			name: "second",
			args: args{n: []int{1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0}},
			want: 766067858140017173,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_base_2(tt.args.n); got != tt.want {
				t.Errorf("B_base_2() = %v, want %v", got, tt.want)
			}
		})
	}
}

package abc222

import (
	"testing"
)

func Test_four_digits(t *testing.T) {
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
			args: args{n: 321},
			want: "0321",
		},
		{
			name: "second",
			args: args{n: 7777},
			want: "7777",
		},
		{
			name: "third",
			args: args{n: 1},
			want: "0001",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_four_digits(tt.args.n); got != tt.want {
				t.Errorf("A_four_digits() = %v, want %v", got, tt.want)
			}
		})
	}
}

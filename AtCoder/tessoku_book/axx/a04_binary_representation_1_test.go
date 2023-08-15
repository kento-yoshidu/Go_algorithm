package axx

import (
	"testing"
)

func Test_binary_representation_1(t *testing.T) {
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
			args: args{n: 13},
			want: "0000001101",
		},
		{
			name: "second",
			args: args{n: 37},
			want: "0000100101",
		},
		{
			name: "third",
			args: args{n: 1000},
			want: "1111101000",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A04_binary_representation_1(tt.args.n); got != tt.want {
				t.Errorf("A04_binary_representation_1() = %v, want %v", got, tt.want)
			}
		})
	}
}

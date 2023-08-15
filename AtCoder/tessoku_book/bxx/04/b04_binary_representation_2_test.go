package tessoku_bxx_04

import (
	"testing"
)

func Test_binary_representation_1(t *testing.T) {
	type args struct {
		n string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: "1101"},
			want: 13,
		},
		{
			name: "second",
			args: args{n: "1"},
			want: 1,
		},
		{
			name: "third",
			args: args{n: "100101"},
			want: 37,
		},
		{
			name: "4th",
			args: args{n: "10000000"},
			want: 128,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B04_binary_representation_2(tt.args.n); got != tt.want {
				t.Errorf("B04_binary_representation_2() = %v, want %v", got, tt.want)
			}
		})
	}
}

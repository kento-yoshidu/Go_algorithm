package abc144

import (
	"testing"
)

func Test_walk_on_multiplication_table(t *testing.T) {
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
			args: args{n: 10},
			want: 5,
		},
		{
			name: "second",
			args: args{n: 50},
			want: 13,
		},
		{
			name: "third",
			args: args{n: 10000000019},
			want: 10000000018,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := C_walk_on_multiplication_table(tt.args.n); got != tt.want {
				t.Errorf("walk_on_multiplication_Table() = %v, want %v", got, tt.want)
			}
		})
	}
}

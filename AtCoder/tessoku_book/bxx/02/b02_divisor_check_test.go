package tessoku_bxx_02

import (
	"testing"
)

func Test_divisor_check(t *testing.T) {
	type args struct {
		a, b int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: 5, b: 20},
			want: "Yes",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B02_divisor_check(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("B04_binary_representation_2() = %v, want %v", got, tt.want)
			}
		})
	}
}

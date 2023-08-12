package tessoku_bxx_03

import (
	"testing"
)

func Test_divisor_check(t *testing.T) {
	type args struct {
		n int
		a []int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 5, a: []int{100, 250, 350, 400, 600}},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: 10, a: []int{50, 150, 250, 350, 450, 550, 650, 750, 850, 950}},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B03_supermarket_1(tt.args.n, tt.args.a); got != tt.want {
				t.Errorf("B03_supermarket_1() = %v, want %v", got, tt.want)
			}
		})
	}
}

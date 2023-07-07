package abc086

import "testing"

func Test_product(t *testing.T) {
	type args struct {
		a int
		b int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: 3, b: 4},
			want: "Even",
		}, {
			name: "second",
			args: args{a: 1, b: 21},
			want: "Odd",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_product(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Product() = %v, want = %v", got, tt.want)
			}
		})
	}
}

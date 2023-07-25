package abc087

import "testing"

func Test_coins(t *testing.T) {
	type args struct {
		a, b, c, x int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{a: 2, b: 2, c: 2, x: 100},
			want: 2,
		},
		{
			name: "second",
			args: args{a: 5, b: 1, c: 0, x: 150},
			want: 0,
		},
		{
			name: "third",
			args: args{a: 30, b: 40, c: 50, x: 6000},
			want: 213,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_coins(tt.args.a, tt.args.b, tt.args.c, tt.args.x); got != tt.want {
				t.Errorf("coins() = %v, want = %v", got, tt.want)
			}
		})
	}
}

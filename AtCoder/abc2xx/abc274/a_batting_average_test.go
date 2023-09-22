package abc274

import (
	"testing"
)

func Test_batting_average(t *testing.T) {
	type args struct {
		a, b float64
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: 7.0, b: 4.0},
			want: "0.571",
		},
		{
			name: "second",
			args: args{a: 7.0, b: 3.0},
			want: "0.429",
		},
		{
			name: "third",
			args: args{a: 2.0, b: 1.0},
			want: "0.500",
		},
		{
			name: "4th",
			args: args{a: 10.0, b: 10.0},
			want: "1.000",
		},
		{
			name: "5th",
			args: args{a: 1.0, b: 0.0},
			want: "0.000",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_batting_average(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("A_batting_average() = %v, want %v", got, tt.want)
			}
		})
	}
}

package abc100

import (
	"testing"
)

func Test_happy_birthday(t *testing.T) {
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
			args: args{a: 5, b: 4},
			want: "Yay!",
		},
		{
			name: "second",
			args: args{a: 8, b: 8},
			want: "Yay!",
		},
		{
			name: "third",
			args: args{a: 11, b: 4},
			want: ":(",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_happy_birthday(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("happy_birthday() = %v, want %v", got, tt.want)
			}
		})
	}
}

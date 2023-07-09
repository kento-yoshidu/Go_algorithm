package abc104

import (
	"testing"
)

func Test_rated_for_me(t *testing.T) {
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
			args: args{n: 1199},
			want: "ABC",
		},
		{
			name: "second",
			args: args{n: 1200},
			want: "ARC",
		},
		{
			name: "third",
			args: args{n: 4208},
			want: "AGC",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_rated_for_me(tt.args.n); got != tt.want {
				t.Errorf("rated_for_me() = %v, want %v", got, tt.want)
			}
		})
	}
}

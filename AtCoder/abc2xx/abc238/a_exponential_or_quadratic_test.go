package abc238

import (
	"testing"
)

func Test_exponential_or_quadratic(t *testing.T) {
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
			args: args{n: 5},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: 2},
			want: "No",
		},
		{
			name: "third",
			args: args{n: 623947744},
			want: "Yes",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_exponential_or_quadratic(tt.args.n); got != tt.want {
				t.Errorf("A_not_overflow() = %v, want %v", got, tt.want)
			}
		})
	}
}

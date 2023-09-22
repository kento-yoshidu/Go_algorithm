package abc237

import (
	"testing"
)

func Test_not_oberflow(t *testing.T) {
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
			args: args{n: 10},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: -9876543210},
			want: "No",
		},
		{
			name: "third",
			args: args{n: 483597848400000},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_not_overflow(tt.args.n); got != tt.want {
				t.Errorf("A_not_overflow() = %v, want %v", got, tt.want)
			}
		})
	}
}

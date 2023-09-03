package abc260

import (
	"testing"
)

func Test_a_unique_letter(t *testing.T) {
	type args struct {
		s string
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{s: "pop"},
			want: "o",
		},
		{
			name: "second",
			args: args{s: "abc"},
			want: "a",
		},
		{
			name: "third",
			args: args{s: "xxx"},
			want: "-1",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_a_unique_letter(tt.args.s); got != tt.want {
				t.Errorf("A_a_unique_letter() = %v, want %v", got, tt.want)
			}
		})
	}
}

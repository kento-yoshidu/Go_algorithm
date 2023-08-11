package arc105

import (
	"testing"
)

func Test_fourtune_cookies(t *testing.T) {
	type args struct {
		a, b, c, d int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: 1, b: 2, c: 3, d: 4},
			want: "Yes",
		},
		{
			name: "second",
			args: args{a: 1, b: 2, c: 4, d: 8},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_fourtune_cookies(tt.args.a, tt.args.b, tt.args.c, tt.args.d); got != tt.want {
				t.Errorf("A_fourtune_cookies() = %v, want %v", got, tt.want)
			}
		})
	}
}

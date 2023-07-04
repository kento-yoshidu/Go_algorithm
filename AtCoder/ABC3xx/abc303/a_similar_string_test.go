package abc303

import (
	"testing"
)

func TestSimilarString(t *testing.T) {
	type args struct {
		n int
		s string
		t string
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 3, s: "l0w", t: "1ow"},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: 3, s: "abc", t: "arc"},
			want: "No",
		},
		{
			name: "third",
			args: args{n: 4, s: "nok0", t: "n0ko"},
			want: "Yes",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := similar_string(tt.args.n, tt.args.s, tt.args.t); got != tt.want {
				t.Errorf("SimilarString() = %v, want %v", got, tt.want)
			}
		})
	}
}

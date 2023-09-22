package abc231

import (
	"testing"
)

func Test_election(t *testing.T) {
	type args struct {
		n int
		s []string
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: 5, s: []string{"snuke", "snuke", "takahashi", "takahashi", "takahashi"}},
			want: "takahashi",
		},
		{
			name: "second",
			args: args{n: 5, s: []string{"takahashi", "takahashi", "aoki", "takahashi", "snuke"}},
			want: "takahashi",
		},
		{
			name: "third",
			args: args{n: 1, s: []string{"a"}},
			want: "a",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_election(tt.args.n, tt.args.s); got != tt.want {
				t.Errorf("B_election() = %v, want %v", got, tt.want)
			}
		})
	}
}

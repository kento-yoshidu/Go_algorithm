package abc101

import (
	"testing"
)

func Test_eating_symbols_easy(t *testing.T) {
	type args struct {
		s string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{s: "+-++"},
			want: 2,
		},
		{
			name: "second",
			args: args{s: "-+--"},
			want: -2,
		},
		{
			name: "third",
			args: args{s: "----"},
			want: -4,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_eating_symbols_easy(tt.args.n); got != tt.want {
				t.Errorf("eating_symbols_easy() = %v, want %v", got, tt.want)
			}
		})
	}
}

package abc182

import (
	"testing"
)

func Test_to_3(t *testing.T) {
	type args struct {
		n string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: "35"},
			want: 1,
		},
		{
			name: "second",
			args: args{n: "369"},
			want: 0,
		},
		{
			name: "third",
			args: args{n: "6227384"},
			want: 1,
		},
		{
			name: "4th",
			args: args{n: "11"},
			want: -1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := C_to_3(tt.args.n); got != tt.want {
				t.Errorf("C_cream_puff() = %v, want %v", got, tt.want)
			}
		})
	}
}

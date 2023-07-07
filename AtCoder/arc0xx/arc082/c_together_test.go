package arc082

import (
	"testing"
)

func Test_nine_nine(t *testing.T) {
	type args struct {
		n int
		a []int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 7, a: []int{3, 1, 4, 1, 5, 9, 2}},
			want: 4,
		},
		{
			name: "second",
			args: args{n: 10, a: []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}},
			want: 3,
		},
		{
			name: "third",
			args: args{n: 1, a: []int{9999}},
			want: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := C_together(tt.args.n, tt.args.a); got != tt.want {
				t.Errorf("c_nine_nine() = %v, want %v", got, tt.want)
			}
		})
	}
}

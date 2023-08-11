package abc180

import (
	"reflect"
	"testing"
)

func Test_cream_puff(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want []int
	}{
		{
			name: "first",
			args: args{n: 6},
			want: []int{1, 2, 3, 6},
		},
		{
			name: "second",
			args: args{n: 720},
			want: []int{1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 30, 36, 40, 45, 48, 60, 72, 80, 90, 120, 144, 180, 240, 360, 720},
		},
		{
			name: "third",
			args: args{n: 1000000007},
			want: []int{1, 1000000007},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := C_cream_puff(tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("C_cream_puff() = %v, want %v", got, tt.want)
			}
		})
	}
}

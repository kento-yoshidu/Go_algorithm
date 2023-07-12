package abc057

import (
	"reflect"
	"testing"
)

func Test_digits_in_multiplication(t *testing.T) {
	type args struct {
		n int
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "first",
			args: args{n: 10000},
			want: 3,
		},
		{
			name: "second",
			args: args{n: 1000003},
			want: 7,
		},
		{
			name: "third",
			args: args{n: 9876543210},
			want: 6,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := C_digits_in_multiplication(tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("C_digits_in_multiplication() = %v, want %v", got, tt.want)
			}
		})
	}
}

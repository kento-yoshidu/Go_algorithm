package abc308

import (
	"reflect"
	"testing"
)

func Test_new_scheme(t *testing.T) {
	type args struct {
		n []int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{n: []int{125, 175, 250, 300, 400, 525, 600, 650}},
			want: "Yes",
		},
		{
			name: "second",
			args: args{n: []int{100, 250, 300, 400, 325, 575, 625, 675}},
			want: "No",
		},
		{
			name: "third",
			args: args{n: []int{0, 23, 24, 145, 301, 413, 631, 632}},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := A_new_schema(tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("new_scheme() = %v, want %v", got, tt.want)
			}
		})
	}
}

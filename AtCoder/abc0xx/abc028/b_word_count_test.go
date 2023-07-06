package abc028

import (
	"reflect"
	"testing"
)

func Test_nine_nine(t *testing.T) {
	type args struct {
		s string
	}

	tests := []struct {
		name string
		args args
		want []int
	}{
		{
			name: "first",
			args: args{s: "BEAF"},
			want: []int{1, 1, 0, 0, 1, 1},
		},
		{
			name: "second",
			args: args{s: "DECADE"},
			want: []int{1, 0, 1, 2, 2, 0},
		},
		{
			name: "third",
			args: args{s: "ABBCCCDDDDEEEEEFFFFFF"},
			want: []int{1, 2, 3, 4, 5, 6},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_word_count(tt.args.s); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("c_nine_nine() = %v, want %v", got, tt.want)
			}
		})
	}
}

package abc039

import (
	"reflect"
	"testing"
)

func Test_agent_takahashi(t *testing.T) {
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
			args: args{n: 1},
			want: 1,
		},
		{
			name: "second",
			args: args{n: 981506241},
			want: 177,
		},
		{
			name: "third",
			args: args{n: 390625},
			want: 25,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_agent_takahashi(tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("B_agent_takahashi() = %v, want %v", got, tt.want)
			}
		})
	}
}

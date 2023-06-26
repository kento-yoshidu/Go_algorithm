package abc086

import "testing"

func Test_1_21(t *testing.T) {
	type args struct {
		a int
		b int
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: 1, b: 21},
			want: "Yes",
		},
		{
			name: "second",
			args: args{a: 100, b: 100},
			want: "No",
		},
		{
			name: "third",
			args: args{a: 12, b: 10},
			want: "No",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := B_1_21(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("1_21() = %v, want = %v", got, tt.want)
			}
		})
	}
}

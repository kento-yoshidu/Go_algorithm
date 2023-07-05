package abc015

import "testing"

func Test_training(t *testing.T) {
	type args struct {
		a string
		b string
	}

	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "first",
			args: args{a: "isuruu", b: "isleapyear"},
			want: "isleapyear",
		},
		{
			name: "second",
			args: args{a: "ttttiiiimmmmeeee", b: "time"},
			want: "ttttiiiimmmmeeee",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := training(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("a_training() = %v, want %v", got, tt.want)
			}
		})
	}
}

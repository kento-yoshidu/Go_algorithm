package abc315

import (
	"strings"
)

func A_tcdr(s string) string {
	var ans string

	for _, c := range s {
		if !strings.Contains("aiueo", string([]rune{c})) {
			ans += string([]rune{c})
		}
	}

	return ans
}

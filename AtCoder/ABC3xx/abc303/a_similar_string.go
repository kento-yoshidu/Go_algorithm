package abc303

import (
	"strings"
)

func Replace(s string) string {
	str := strings.Replace(s, "l", "1", -1)
	str = strings.Replace(str, "o", "0", -1)

	return str
}

func similar_string(n int, s, t string) string {
	left := Replace(s)
	right := Replace(t)

	if left == right {
		return "Yes"
	} else {
		return "No"
	}
}

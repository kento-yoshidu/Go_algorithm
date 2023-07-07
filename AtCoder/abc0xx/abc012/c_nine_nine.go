package abc012

import (
	"strconv"
)

func C_nine_nine(n int) []string {
	var ans []string

	sa := 2025 - n

	for i := 1; i <= 9; i++ {
		for j := 1; j <= 9; j++ {
			if i*j == sa {
				ans = append(ans, strconv.Itoa(i)+" * "+strconv.Itoa(j))
			}
		}
	}

	return ans
}

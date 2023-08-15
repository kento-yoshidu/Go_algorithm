package axx

import "strconv"

func A04_binary_representation_1(n int) string {
	ans := ""

	tmp := n

	for i := 10; i > 0; i-- {
		ans = strconv.Itoa(tmp%2) + ans
		tmp /= 2
	}

	return ans
}

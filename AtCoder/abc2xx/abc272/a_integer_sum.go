package abc272

func A_integer_sum(n int, a []int) int {
	ans := 0

	for _, val := range a {
		ans += val
	}

	return ans
}

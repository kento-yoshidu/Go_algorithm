package abc273

func calc(n int) int {
	if n == 0 {
		return 1
	}

	return n * calc(n-1)
}

func A_a_recursive_function(n int) int {
	return calc(n)
}

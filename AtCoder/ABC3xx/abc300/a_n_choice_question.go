package abc300

func A_n_choice_question(n, a, b int, c []int) int {
	for i, num := range c {
		if a+b == num {
			return i + 1
		}
	}

	return -1
}

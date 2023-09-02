package abc317

func A_317(n, h, x int, p []int) int {
	rest := x - h

	for i, val := range p {
		if rest <= val {
			return i + 1
		}
	}

	return 0
}

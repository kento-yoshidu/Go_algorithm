package abc177

func B_substring(s, t string) int {
	ans := len(t)

	for i := 0; i < len(s)-len(t); i++ {
		count := 0

		for j := 0; j < len(t); j++ {
			if s[i+j] != t[j] {
				count++
			}
		}

		if count < ans {
			ans = count
		}
	}

	return ans
}

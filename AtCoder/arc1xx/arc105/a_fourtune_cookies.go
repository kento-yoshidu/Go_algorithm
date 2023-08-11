package arc105

func A_fourtune_cookies(a, b, c, d int) string {
	s := []int{a, b, c, d}

	for bit := 1; bit < 16; bit++ {
		num := 0
		num2 := 0

		for i := 0; i < 4; i++ {
			if bit&(1<<i) != 0 {
				num += s[i]
			} else {
				num2 += s[i]
			}
		}

		if num == num2 {
			return "Yes"
		}
	}

	return "No"
}

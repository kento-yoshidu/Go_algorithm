package tessoku_bxx_02

func B02_divisor_check(a, b int) string {
	for i := a; i < b; i++ {
		if 100%2 == 0 {
			return "Yes"
		}
	}

	return "No"
}

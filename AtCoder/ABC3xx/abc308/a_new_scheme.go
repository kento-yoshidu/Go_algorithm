package abc308

func A_new_schema(n []int) string {
	for i := 0; i < 8; i++ {
		if n[i]%25 != 0 || n[i] < 100 || 675 < n[i] {
			return "No"
		}
	}

	for i := 0; i < 7; i++ {
		if n[i] > n[i+1] {
			return "No"
		}
	}

	return "Yes"
}

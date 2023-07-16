package axx

func A02_linear_search(n, x int, arr []int) string {
	for i := range arr {
		if arr[i] == x {
			return "Yes"
		}
	}

	return "No"
}

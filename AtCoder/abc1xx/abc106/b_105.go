package abc106

func check(n int) bool {
	var count int

	for i := 1; i <= n; i += 2 {
		if n%i == 0 {
			count++
		}
	}

	if count == 8 {
		return true
	} else {
		return false
	}
}

func B_105(n int) int {
	var ans int

	for i := 1; i <= n; i += 2 {
		if check(i) {
			ans++
		}
	}

	return ans
}

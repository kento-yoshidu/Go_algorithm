package tessoku_bxx_03

func B03_supermarket_1(n int, a []int) string {
	for i := 0; i < n-2; i++ {
		for j := i + 1; j < n-1; j++ {
			if a[i]+a[j] >= 1000 {
				break
			}

			for k := j + 1; k < n; k++ {
				if a[i]+a[j]+a[k] == 1000 {
					return "Yes"
				}
			}
		}
	}

	return "No"
}

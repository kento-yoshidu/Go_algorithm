package abc180

import "sort"

func C_cream_puff(n int) []int {
	var ans []int

	for i := 1; i*i <= n; i++ {
		if n%i == 0 {
			ans = append(ans, i)
			ans = append(ans, n/i)
		}
	}

	sort.Slice(ans, func(a, b int) bool {
		return ans[a] < ans[b]
	})

	return ans
}

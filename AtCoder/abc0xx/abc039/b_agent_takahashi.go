package abc039

func B_agent_takahashi(n int) int {
	var ans int

	for i := 1; i <= n; i++ {
		if i*i*i*i == n {
			ans = i
			break
		}
	}

	return ans
}

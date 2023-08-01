// https://atcoder.jp/contests/abc144/tasks/abc144_c

package abc144

func C_walk_on_multiplication_table(n int) int {
	ans := n

	for i := 1; i*i <= n; i++ {
		if n%i == 0 {
			j := n / i

			if (i + j - 2) < ans {
				ans = i + j - 2
			}
		}
	}

	return ans
}

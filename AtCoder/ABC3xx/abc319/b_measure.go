// https://atcoder.jp/contests/abc319/tasks/abc319_b

package abc319

import "strconv"

func B_measure(n int) string {
	ans := ""
outer:
	for i := 0; i <= n; i++ {
		for j := 1; j <= 9; j++ {
			if n%j == 0 {
				if i%(n/j) == 0 {
					s := strconv.Itoa(j)
					ans += s
					continue outer
				}
			}
		}

		ans += "-"
	}

	return ans
}

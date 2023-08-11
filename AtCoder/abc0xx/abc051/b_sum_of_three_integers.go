// https://atcoder.jp/contests/abc051/tasks/abc051_b

package abc051

func B_sum_of_three_integers(k, s int) int {
	ans := 0

	for x := 0; x <= k; x++ {
		for y := 0; y <= k; y++ {
			if x+y > s {
				break
			}

			if x+y == s {
				ans++
				break
			}

			if (s - x - y) <= k {
				ans++
			}
		}
	}

	return ans
}

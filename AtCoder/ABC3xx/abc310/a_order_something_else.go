// https://atcoder.jp/contests/abc310/tasks/abc310_a

package abc310

func A_order_something_else(n, p, q int, a []int) int {
	min := 100000

	for _, s := range a {
		if min > s {
			min = s
		}
	}

	if q+min < p {
		return q + min
	} else {
		return p
	}
}

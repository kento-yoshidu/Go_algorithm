// https://atcoder.jp/contests/abc259/tasks/abc259_a

package abc259

func A_growth_record(n, m, x, t, d uint) uint {
	if m >= x {
		return t
	}

	return t - (n-m)*d
}

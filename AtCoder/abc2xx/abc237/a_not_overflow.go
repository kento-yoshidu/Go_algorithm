// https://atcoder.jp/contests/abc237/tasks/abc237_a

package abc237

import "math"

func A_not_overflow(n int) string {
	if math.Pow(-2, 31) <= float64(n) && float64(n) < math.Pow(2, 31) {
		return "Yes"
	} else {
		return "No"
	}
}

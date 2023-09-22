// https://atcoder.jp/contests/abc239/tasks/abc239_a

package abc239

import "math"

func A_horizon(h int) float64 {
	return math.Sqrt(float64(h * (h + 12800000)))
}

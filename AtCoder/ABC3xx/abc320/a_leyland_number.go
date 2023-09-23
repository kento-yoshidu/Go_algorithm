// https://atcoder.jp/contests/abc320/tasks/abc320_a

package abc320

import "math"

func A_leyland_number(a, b int) int {
	return int(math.Pow(float64(a), float64(b)) + math.Pow(float64(b), float64(a)))
}

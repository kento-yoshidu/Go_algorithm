// https://atcoder.jp/contests/abc100/tasks/abc100_a

package abc100

import "math"

func A_happy_birthday(a, b int) string {
	max := math.Max(float64(a), float64(b))

	if max <= 8 {
		return "Yay!"
	} else {
		return ":("
	}
}

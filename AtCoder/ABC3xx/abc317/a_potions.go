// https://atcoder.jp/contests/abc317/tasks/abc317_a

package abc317

func A_potions(n, h, x int, p []int) int {
	rest := x - h

	for i, val := range p {
		if rest <= val {
			return i + 1
		}
	}

	return 0
}

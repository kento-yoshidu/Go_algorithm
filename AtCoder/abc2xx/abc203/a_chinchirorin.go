// https://atcoder.jp/contests/abc203/tasks/abc203_a

package abc203

func A_chinchirorin(a, b, c int) int {
	if a != b && a != c && b != c {
		return 0
	}

	if a == b {
		return c
	} else if a == c {
		return b
	} else {
		return a
	}
}

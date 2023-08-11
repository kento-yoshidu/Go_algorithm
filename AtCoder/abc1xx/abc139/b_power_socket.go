// https://atcoder.jp/contests/abc139/tasks/abc139_b

package abc139

func B_power_socket(a, b int) int {
	if a == b {
		return 1
	} else {
		return b/a + 1
	}
}

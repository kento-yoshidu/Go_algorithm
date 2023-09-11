// https://atcoder.jp/contests/abc022/tasks/abc022_a

package abc022

func A_best_body(n, s, t int, w []int) int {
	ans := 0

	new_vec := []int{}

	for i := 0; i < len(w); i++ {
		if i == 0 {
			new_vec = append(new_vec, w[0])
		} else {
			new_vec = append(new_vec, (new_vec[i-1] + w[i]))
		}

		if s <= new_vec[i] && new_vec[i] <= t {
			ans++
		}
	}

	return ans
}

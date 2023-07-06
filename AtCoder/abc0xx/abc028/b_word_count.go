// https://atcoder.jp/contests/abc028/tasks/abc028_b

package abc028

func B_word_count(s string) []int {
	ans := make([]int, 6)

	for _, c := range s {
		ans[rune(c)-65] += 1
	}

	return ans
}

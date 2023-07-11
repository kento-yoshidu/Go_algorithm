// https://atcoder.jp/contests/abc101/tasks/abc101_a

package abc101

import "fmt"

func A_eating_symbols_easy(s string) int {
	ans := 0

	for _, c := range s {
		fmt.Printf("%c\n", c)
		if c == '+' {
			ans++
		} else {
			ans--
		}
	}

	return ans
}

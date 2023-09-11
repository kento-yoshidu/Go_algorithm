// https://atcoder.jp/contests/abc318/tasks/abc318_a

package abc318

import "fmt"

func A_full_moon(n, m, p int) int {
	if n-m < 0 {
		return 0
	}

	fmt.Printf("=> %v", (n-m)/p+1)

	return (n-m)/p + 1
}

// https://atcoder.jp/contests/abc274/tasks/abc274_a

package abc274

import (
	"fmt"
)

func A_batting_average(a, b float64) string {
	return fmt.Sprintf("%.3f", b/a)
}

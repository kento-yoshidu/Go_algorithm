// https://atcoder.jp/contests/abc182/tasks/abc182_c

package abc182

import (
	"math"
	"strconv"
)

func C_to_3(n string) int {
	ans := math.MaxInt32
	num, _ := strconv.Atoi(n)

	if num%3 == 0 {
		return 0
	}

	for bit := 1; bit < int(math.Pow(2, float64(len(n)))); bit++ {
		num := ""
		count := 0

		for i := 0; i < len(n); i++ {
			if bit&(1<<i) != 0 {
				count++
				tmp := (n[i])

				num = num + string(tmp)
			}
		}

		num2, _ := strconv.Atoi((num))

		if num2%3 == 0 {
			if ans > count {
				ans = count
			}
		}
	}

	if ans == math.MaxInt32 {
		return -1
	} else {
		return ans
	}
}

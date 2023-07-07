package arc082

import (
	"math"
)

func C_together(n int, a []int) int {
	ans := 0

	max := 0
	min := math.MaxInt32

	for _, value := range a {
		if value > max {
			max = value
		}
	}

	for _, value := range a {
		if value < min {
			min = value
		}
	}

	for i := min; i <= max; i++ {
		count := 0

		for j := 0; j < len(a); j++ {
			if math.Abs(float64(i-a[j])) <= 1 {
				count++
			}
		}

		if ans < count {
			ans = count
		}
	}

	return ans
}

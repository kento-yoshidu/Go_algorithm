package abc086

import (
	"math"
	"strconv"
)

func B_1_21(a, b int) string {
	s := strconv.Itoa(a) + strconv.Itoa(b)

	var num int

	num, _ = strconv.Atoi(s)

	for i := 1; i <= int(math.Sqrt(float64(num))); i++ {
		if i*i == num {
			return "Yes"
		}
	}

	return "No"
}

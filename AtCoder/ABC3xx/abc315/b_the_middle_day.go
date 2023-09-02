package abc315

import "fmt"

func B_the_middle_day(m int, d []int) []int {
	ans := []int{}

	sum := 0
	for _, x := range d {
		sum += x
	}

	middle := sum/2 + 1

	for index, day := range d {
		if middle-day <= 0 {
			ans = append(ans, index+1)
			ans = append(ans, middle)

			break
		}

		middle -= day
	}

	fmt.Printf("%v\n", ans)

	return ans
}

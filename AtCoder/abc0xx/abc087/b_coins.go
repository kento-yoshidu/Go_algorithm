package abc087

func B_coins(a, b, c, x int) int {
	var count int

	for i := 0; i <= a; i++ {
		if i*500 > x {
			break
		}

		for j := 0; j <= b; j++ {
			if i*500+j*100 > x {
				break
			}

			if i*500+j*100 == x {
				count++
				continue
			}

			var num = x - (i*500 + j*100)

			if num/50 <= c {
				count++
			}
		}
	}

	return count
}

package abc057

func calc_digit(n int) int {
	ans := 0

	i := n

	for i != 0 {
		ans++

		i /= 10
	}

	return ans
}

func C_digits_in_multiplication(n int) int {
	ans := n

	for i := 1; i*i <= n; i++ {
		if n%i == 0 {
			b := n / i

			num := i + b - 2

			digit := calc_digit(num)

			if digit < ans {
				ans = digit
			}
		}
	}

	return ans
}

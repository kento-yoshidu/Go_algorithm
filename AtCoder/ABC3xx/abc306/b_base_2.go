package abc306

func B_base_2(arr []int) int {
	var ans int

	for i := 0; i < 64; i++ {
		ans += arr[i] << i
	}

	return ans
}

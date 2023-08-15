package tessoku_bxx_04

// 文字列を逆に並べ替える
func reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func B04_binary_representation_2(n string) int {
	ans := 0

	str := reverse(n)

	for i, v := range str {
		ans += int((v - 48) << i)
	}

	return ans
}

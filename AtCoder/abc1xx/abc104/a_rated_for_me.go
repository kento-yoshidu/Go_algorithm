package abc104

func A_rated_for_me(n int) string {
	if n < 1200 {
		return "ABC"
	} else if n < 2800 {
		return "ARC"
	} else {
		return "AGC"
	}
}

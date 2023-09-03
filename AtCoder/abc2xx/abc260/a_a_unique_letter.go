package abc260

func A_a_unique_letter(s string) string {
	m := map[string]int{}

	for _, c := range s {
		_, isExist := m[string(c)]

		if isExist {
			m[string(c)] += 1
		} else {
			m[string(c)] = 1
		}
	}

	for key, value := range m {
		if value == 1 {
			return key
		}
	}

	return "-1"
}

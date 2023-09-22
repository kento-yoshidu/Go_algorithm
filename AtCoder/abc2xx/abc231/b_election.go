package abc231

func B_election(n int, s []string) string {
	hashmap := map[string]int{}

	for _, name := range s {
		_, found := hashmap[name]

		if found {
			hashmap[name]++
		} else {
			hashmap[name] = 1
		}
	}

	max := 0

	for _, value := range hashmap {
		if value >= max {
			max = value
		}
	}

	for name, value := range hashmap {
		if value == max {
			return name
		}
	}

	return "unreachable"
}

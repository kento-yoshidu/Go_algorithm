package axx

func A03_two_cards(n, k int, p, q []int) string {
	for _, pp := range p {
		for _, jj := range q {
			if pp+jj == k {
				return "Yes"
			}
		}
	}

	return "No"
}

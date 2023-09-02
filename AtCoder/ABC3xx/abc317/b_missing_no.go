// https://atcoder.jp/contests/abc317/tasks/abc317_b

package abc317

import "sort"

func B_missing_no(n int, a []int) int {
	sort.Slice(a, func(i, j int) bool {
		return a[i] < a[j]
	})

	for i := 0; i < len(a)-1; i++ {
		if a[i+1]-a[i] == 2 {
			return a[i] + 1
		}
	}

	return 10
}

/*
	fmt.Printf("%v\n", abc317.B_317(3, []int{2, 3, 5}))
	fmt.Printf("%v\n", abc317.B_317(8, []int{3, 1, 4, 5, 9, 2, 6, 8}))
	fmt.Printf("%v\n", abc317.B_317(16, []int{152, 153, 154, 147, 148, 149, 158, 159, 160, 155, 156, 157, 144, 145, 146, 150}))
*/

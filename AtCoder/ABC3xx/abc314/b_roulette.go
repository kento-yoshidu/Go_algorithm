package abc314

import (
	"math"

	"golang.org/x/exp/slices"
)

type MySlice struct {
	Index  int
	Length int
	Second []int
}

func filter(s []MySlice, min int) []MySlice {
	var result []MySlice

	for _, s := range s {
		if s.Length == min {
			result = append(result, s)
		}
	}

	return result
}

func B_roulette(n int, a [][]int, x int) (int, []int) {
	new_arr := make([]MySlice, 0)

	for index, arr := range a {
		if slices.Contains(arr, x) {
			slice := MySlice{
				Index:  index + 1,
				Length: len(arr),
				Second: arr,
			}

			new_arr = append(new_arr, slice)
		}
	}

	min := int(math.MaxInt64)

	for _, arr := range new_arr {
		if arr.Length < min {
			min = arr.Length
		}
	}

	filtered_arr := filter(new_arr, min)

	index := []int{}

	for _, arr := range filtered_arr {
		index = append(index, arr.Index)
	}

	return len(index), index
}

// Package work contains the workload in a non-main package of the module. A
// -trimpath build leaves the package's import path as each frame's whole file
// path. The module path takes the shape of a downloaded module's, so only the
// module cache's @version separates the two.
package work

import "encoding/json"

// Run allocates enough for the collector to run during the profile.
func Run(data []byte) int {
	const iterations = 400
	total := 0
	for i := 0; i < iterations; i++ {
		var v any
		if err := json.Unmarshal(data, &v); err != nil {
			panic(err)
		}
		b, err := json.Marshal(v)
		if err != nil {
			panic(err)
		}
		total += len(b)
	}
	return total
}

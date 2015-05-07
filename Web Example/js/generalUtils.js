/* ----- String Utils ----- */
// Capitalizes the first letter in the string
// Parameters:
//		string: string to be capitalized 
// Returns: capitalized string 
function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* ----- Sorting Utils ----- */
// One-dimensional Array Quick Sort Algorithm 
// Parameters:
// 		a: non-empty array
// Returns: Sorted array
function qsort(a) {
	if (a.length == 0) return [];
 
	var left = [], right = [], pivot = a[0];
	for (i = 1; i < a.length; i++) {
		a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
	}
	return qsort(left).concat(pivot, qsort(right));
}

// Two-dimensional Array Quick Sort Algorithm
// Parameters: 
// 		a2d: non-empty two-dimensional array
// 		col: array index to sort on (0..a2d[].length)
// 		reverse: OPTIONAL sort in reverse order
// Returns: Sorted two-dimensional array
function qsort(a2d, col, reverse) {
	if (a2d.length == 0) return []; 
	
	// "optional" reverse paramter 
	reverse = (typeof reverse === "undefined") ? false : reverse;
	
	var left = [], right = [], pivot = a2d[0];
	for (var i = 1; i < a2d.length; i++) {
		if (reverse) 
			a2d[i][col] > pivot[col] ? left.push(a2d[i]) : right.push(a2d[i]);
		else 
			a2d[i][col] < pivot[col] ? left.push(a2d[i]) : right.push(a2d[i]); 
	}
	return qsort(left, col, reverse).concat([pivot], qsort(right, col, reverse)); 
}
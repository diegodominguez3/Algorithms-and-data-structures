function getPermutations(array) {
  // Write your code here.
	const permutations = []; 
	permsHelper(array,[],permutations); 
	return permutations;
	
	function permsHelper(arr, perm, perms) {
		if(!arr.length && perm.length) perms.push(perm); 
		else {
			for(let i = 0; i < arr.length; i++) {
				const newArr = arr.slice(0,i).concat(arr.slice(i + 1)); 
				const newPerm = perm.concat([arr[i]]);
				permsHelper(newArr, newPerm, perms); 
			}
		}
	}	
}

function getPermutations(array) {
  // Write your code here.
	const permutations = []; 
	permsHelper(0, array, permutations); 
	return permutations; 
	
	function permsHelper(i, array, permutations) {
		if(i === array.length - 1) permutations.push(array.slice());
		else {
			for(let j = i; j < array.length; j++){
				swap(array, i, j);
				permsHelper(i + 1, array, permutations);
				swap(array, i, j); 
			}
		}
	}
	function swap(array,i,j) {
		const temp = array[i]; 
		array[i] = array[j]; 
		array[j] = temp;
	}	
}
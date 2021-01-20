function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a,b) => a - b);
	let wating_time = queries[0];
	let temp_wait = wating_time; 
	if(queries.length === 1) return 0;
	for(let i = 1; i < queries.length - 1; i++) {
		let current_sum = temp_wait + queries[i];
		wating_time += current_sum;
		temp_wait = current_sum; 
	}
  return wating_time;
}
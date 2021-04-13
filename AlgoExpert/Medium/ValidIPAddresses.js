function validIPAddresses(string) {
  // Write your code here.
	const ipAddressesFound = []; 
	
	for(let i = 0; i < Math.min(string.length, 4); i++) {
		const currentIPAddress = ['', '', '', '']; 
		currentIPAddress[0] = string.slice(0,i);
		if(!isValidSegment(currentIPAddress[0])) continue; 
		
		for(let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
			currentIPAddress[1] = string.slice(i,j);
			if(!isValidSegment(currentIPAddress[1])) continue; 
			
			for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
				currentIPAddress[2] = string.slice(j,k); 
				currentIPAddress[3] = string.slice(k);
				
				if(isValidSegment(currentIPAddress[2]) && isValidSegment(currentIPAddress[3])) {
					ipAddressesFound.push(currentIPAddress.join('.'));
				}
			}
		}
	}
	
	return ipAddressesFound; 
}

function isValidSegment(string) {
  const stringAsInt = parseInt(string); 
  if(stringAsInt > 255) return false;
  
  return string.length === stringAsInt.toString().length;
}

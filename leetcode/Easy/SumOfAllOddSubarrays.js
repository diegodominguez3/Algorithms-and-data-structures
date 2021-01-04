function sumOfAllOddSubarrays(arr) {
    if(arr.length < 1) return 0;  
    let OddSum = 0;
    for(i = 0; i < arr.length; i++) {
        let currentSum = 0; 
        for(j = i; j < arr.length; j++) {
            currentSum += arr[j];  
            if((j - i + 1)%2 !== 0) {
                OddSum += currentSum; 
            }
        }
    }
    return sum; 
}

function sumOfAllOddSubarrays(arr) {
    if(arr.length < 1) return 0; 
    let result = 0; 
    const n = arr.length; 
    
    for(let i = 0; i < arr.length; i++) {
        const end = i + 1; 
        const start = n - i; 
        const total = start * end; 
        const odd = total % 2 === 0 ? total/2 : (Math.floor(total/2)) + 1; 
        result += odd * arr[i];
    }
    
    return result; 
}


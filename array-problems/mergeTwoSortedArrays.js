function mergeSortedArrays(array1, array2){
    if(array1.length === 0) {
        return array2; 
    }
    if(array2 === 0) {
        return array1; 
    }

    const mergedArray = []; 
    let pointer1 = 1;
    let pointer2 = 1;  
    let item1 = array1[0]; 
    let item2 = array2[0]; 

    while(item1 || item2) {
        if (item2 === undefined || item1 < item2){
            mergedArray.push(item1); 
            item1 = array1[pointer1]; 
            pointer1 ++; 
        }
        else {
            mergedArray.push(item2); 
            item2 = array2[pointer2]; 
            pointer2 ++; 
        }
    }

    return mergedArray; 
}
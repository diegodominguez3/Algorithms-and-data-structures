function birthdayCakeCandles(candles) {
    let tallest_candle = candles[0]; 
    let cake_candles = {}; 

    for(let candle of candles){
        candle in cake_candles ? cake_candles[candle]++ : cake_candles[candle] = 1; 
    }

    for(let candle in cake_candles){
        if(candle > tallest_candle) tallest_candle = candle; 
    }

    return cake_candles[tallest_candle]; 
}

console.log(birthdayCakeCandles([4,4,1,3])); 
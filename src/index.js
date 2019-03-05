// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H;
    var Q; 
    var D; 
    var N; 
    var P;

    if (currency>0 && currency<10000)
    {
        H=Math.floor(currency/50);
        
        Q=Math.floor((currency-(H*50))/25);
        
        D=Math.floor((currency-(H*50)-(Q*25))/10);
        
        N=Math.floor((currency-(H*50)-(Q*25)-(D*10))/5);
        
        P=Math.floor((currency-(H*50)-(Q*25)-(D*10)-(N*5))/1);
         var Arr={"H":H,"Q":Q, "D":D,"N":N,"P":P}
         if (Arr.number==0)
         console.log({}); //Arr.number;
         return currency=Arr;
    }

          
    if (currency<=0) 
    return {};   
    else if (currency>= 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
};

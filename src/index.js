// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var key, key1,key2,key3,key4,key5;
   

    if (currency>0 && currency<10000)
    {
        key1=Math.floor(currency/50);
        
        key2=Math.floor((currency-(key1*50))/25);
        
        key3=Math.floor((currency-(key1*50)-(key2*25))/10);
        
        key4=Math.floor((currency-(key1*50)-(key2*25)-(key3*10))/5);
        
        key5=Math.floor((currency-(key1*50)-(key2*25)-(key3*10)-(key4*5))/1);
        var Arr={"H":key1,"Q":key2, "D":key3,"N":key4,"P":key5};
        Object.keys(Arr).forEach((key) => (Arr[key] == 0) && delete Arr[key]);
        return Arr;


    }
    if (currency<=0) 
    return {};   
    else if (currency>= 10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
};

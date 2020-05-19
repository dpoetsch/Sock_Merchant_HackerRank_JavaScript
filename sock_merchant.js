function sockMerchant(n, ar) {

    var match = 0;
var order = ar.sort(function(a,b){
      return a-b;
    });
var pair = []; // 1,3,4,5,7

for (var i = 0; i < n; i++ )
    //.includes search for ar index inside the pair array = boolean
    if ( pair.includes(order[i])) {
      pair.pop();
      match += 1;
        
    }else{
        pair[i] = order[i];

    }
    
return match;

} 

sockMerchant(9, [10,20,50,20,30,20,40,10,30,20,10,20])

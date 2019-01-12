console.log("radomisation.js is active");
console.log("");

var randomBetween = function(x,y){
var max, min,diff;
if (x>y)
	{max = x, min = y} else {max = y , min = x};
diff = max - min;
return min+Math.floor(Math.random()*diff);
};




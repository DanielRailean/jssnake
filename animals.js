console.log("animals.js is active");
console.log("");

var furyAnimals = [
"snake",
"alpaca",
"lemur",
"yeti",
"griffin",
"cats"
];

var scaryAnimals = [
"godzilla",
"boa constrictor"
];

var twiceFuryAndScaryAnimals = furyAnimals.concat(scaryAnimals);


for (i=0; i<furyAnimals.length; i++){
	console.log(furyAnimals[i]);
};

console.log("");
console.log("");

for (i=0; i<twiceFuryAndScaryAnimals.length; i++){
	console.log(twiceFuryAndScaryAnimals.indexOf(twiceFuryAndScaryAnimals[i]));
};
console.log("");

var longStringWithNoSense = twiceFuryAndScaryAnimals.join("");
var length = longStringWithNoSense.length;
console.log(longStringWithNoSense, 'its length:',length);

console.log("");
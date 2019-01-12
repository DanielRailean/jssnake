console.log('dinosaurs.js is active');

var dinosaurs = [
"t-rex",
"velociraptor",
"stegosaurus",
"triceratops",
"brachiosaurs",
"apatosaurus",
"diplodocus"
];
for (i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i]);
};
console.log("");
console.log("this was the array before changes occured");

console.log("");
console.log("");
dinosaurs.push("chicken","fish");
dinosaurs.unshift("2nd dinosaur");
dinosaurs.unshift("1st dinosaur");
for (i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i]);
};
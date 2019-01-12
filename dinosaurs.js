console.log('dinosaurs.js is active');
console.log("");

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
dinosaurs.push("chicken","fish");
dinosaurs.unshift("2nd dinosaur");
dinosaurs.unshift("1st dinosaur");
for (i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i]);
};

console.log("");


var lastAnimal = dinosaurs.pop();
dinosaurs.unshift(lastAnimal);
console.log('lash animal is :',lastAnimal, 'and it will become the first animal');
console.log("");
for (i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i]);
};
console.log("");
console.log('that`s how magic works');
console.log("");
console.log("redo");
console.log("");

var firstAnimal = dinosaurs.shift();
dinosaurs.push(firstAnimal);
for (i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i]);
};



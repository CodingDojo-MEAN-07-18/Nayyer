console.log(hello);                                   
var hello = 'world';   // this would be raised above // output will be .... world                             


// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

////
var needle = 'haystack';
test();
function test(){         //stand alone function hoisted above
	var needle = 'magnet';     // output magnet
	console.log(needle);
}


var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
print();
console.log(brendan);  // super cool , function is never called
///

var food = 'chicken';
console.log(food);  // chicken
eat(); // half chicken
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}


//mean();// chicken fish
console.log(food); // undefined
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food); // undefined




console.log(genre);// undefined
var genre = "disco";
rewind();//rock r&b
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); //disco


dojo = "san jose";
console.log(dojo); //sanjose
learn();// seattle burbank
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo); // sanjose



console.log(makeDojo("Chicago", 65));//dojo{name:'Chicago',students:'65',hiring:'True'}
console.log(makeDojo("Berkeley", 0));// error
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function (num1, num2){
	var answer = num1*num2;
	return answer;
}
console.log(multiply(4,5));

// whatForLunch
var whatForLunch = function(name, food){

};
// isLargerThan100
var isLargerThan100 = function(number){
	if (number >= 100) { 
	console.log("Is greater than 100");
	}
else{
	console.log("Is not greater than 100");
}
}
console.log(isLargerThan100(223));
// anyEvens

var numbers = [3,4,56,7,8,9]
var anyEvens = function (array){
	for (var i = 0; i < numbers.length; i++){
		if (numbers % 2 === 0){
		console.log("I did this correctly, because it is even and it checked the right answer")
	}
	else {
		console.log("The number is odd.")
	};

	};

};
console.log(anyEvens(numbers));

// printDataType
var printDataType = function (collection){
if (typeOf === "object"){
	for (var key in obj)
}
else if (type of === "array"){
	for( var i = 0; i < arr.length; i++){
		console.log("I am an array")
	}
}
else {
	console.log("I do not know what you are! What are you?.");
};
};


// isDivisibleBy

var isDivisibleBy = function(num1, num2){
	if (num1 % num2 === 0){
		return true
	}
	else {
		return false
	}
	
};
console.log(isDivisibleBy(164,4));


// fizzBuzz

var fizzBuzz = function (array){
//need to have a list of numbers to test through the function.
//needs to loop through the array
// and compare each number to the if statements below. 
var results = function (array){
	for (var i = 0; i < number.length; i++)
var number = [4,5,6,6,7,3,15]

if (number % 3 === 0 && number % 5 === 0){
	console.log("FizzBuzz")
}
else if (number % 3 === 0) {
	console.log("Fizz")
}
else if (number % 5 === 0){
	console.log("Buzz")
}
else {
	console.log(number)
};
};

fizzBuzz();


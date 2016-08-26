// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;
// 2. Bracket notation:
twitter['ceo'] = "Jack Dorsey";
// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";

twitter['address'] = "1355 Market St #900, San Francisco, CA 94103";
// 4. Array:
var array = ["Today was an awesome adventure", "What time is it?", "Moderation is not the key, why only two to three?"];
// 5. Loop through array:
for (var i = 0; i < array.length; i++){
	console.log(array[i]);
}
// 6. Invoke countCharacters:

// 7. Loop through twitter object:
for (var key in twitter){
	console.log();
}
function createDictionary(heightsArray){
    var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var dictionary = {};
    for(var i = 0; i < abc.length; i++){
        dictionary[abc[i]] = heightsArray[i];
    };
    return dictionary;
};

function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var heightsDictionary = createDictionary(h);

    var word = readLine();
    var wordArray = word.split("");

    var width = wordArray.length;
    var height = 0;

    for(var i = 0; i < wordArray.length; i++){
        if(heightsDictionary[wordArray[i]] > height){
            height = heightsDictionary[wordArray[i]];
        }
    };

    console.log(width * height);

}

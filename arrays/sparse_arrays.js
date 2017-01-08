function processData(input) {
    var inputArray = input.split("\n");
    var numbString = parseInt(inputArray[0]);

    var strings = inputArray.slice(1,numbString +1 );
    var queries = inputArray.slice(numbString+2, inputArray.length);

    main(strings,queries);
}

function main(strings,queries){
    for(i = 0; i < queries.length; i++){
        var stringToCount = queries[i];
        var counter = 0;
        for(j = 0; j < strings.length; j++){
            if(strings[j] === queries[i]){
                counter += 1;
            }
        }
        console.log(counter);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
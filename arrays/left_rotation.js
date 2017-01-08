function processData(input) {
    var inputArray = input.split("\n");
    var numInteger = inputArray[0].split(' ').map(Number);
    var rotateBy = numInteger[1];
    numInteger = numInteger[0];

    var arr = inputArray[1].split(' ');
    arr = arr.map(Number);

    main(numInteger, rotateBy, arr);
}

function main(integerCount, rotateNumber, array){

    for(i=0; i < rotateNumber; i++){
        var firstNumber = array.shift();
        array.push(firstNumber);
    }

    console.log(array.join(" "));
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

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
    var timeArray = time.split(":");
    var hour = parseInt(timeArray[0]);
    var min = timeArray[1];
    var sec = timeArray[2].split("")[0] + timeArray[2].split("")[1];
    if(hour < 12 && (timeArray[2].split("")[2] === "P")){
        hour = hour + 12;
    }else if(hour === 12 && (timeArray[2].split("")[2] === "A")){
        hour = 00;
    }
    if(hour < 12 && (timeArray[2].split("")[2] === "A")){
        hour = "0" + hour;
    }
    console.log(hour + ":" + min + ":" + sec);
}
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
    var n_temp = readLine().split(' ');
    //n number of items in array
    var n = parseInt(n_temp[0]);
    //k number rotates
    var k = parseInt(n_temp[1]);
    //q number of indices called
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    var i = 1;
    while(i <= k){
        var popped = a.pop();
        a.unshift(popped);
        i++;
    }
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m]);
    }

}
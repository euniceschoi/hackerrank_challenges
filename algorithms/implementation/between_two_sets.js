function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    a = a.sort();
    b = b.sort();

    var finalArray = [];
    var count = 0;
    for(var i = a[a.length-1]; i <= b[0]; i++){
        for(var j = 0; j < a.length; j++){
            if(i % a[j] != 0){
                count ++;
            }
        };
        for(var k = 0; k < b.length; k++){
            if(b[k] % i != 0){
                count ++;
            }
        };
        if(count === 0){
            finalArray.push(i);
        }
        count = 0;
    };

    console.log(finalArray.length);

}
function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var doMath = (x1-x2)/(v2-v1);
    if(doMath < 0){
        console.log('NO');
    } else {
        if(doMath % 1 === 0){
            console.log('YES');
        }else{
            console.log('NO');
        }
    }

}
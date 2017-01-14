function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    var array = [];
    array.push(a,b,c,d,e);
    array.sort();
    var min = array[0]+array[1]+array[2]+array[3];
    var max = array[1]+array[2]+array[3]+array[4];
    console.log(min + " " + max);
}
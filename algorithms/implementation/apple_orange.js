function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);//where house begins
    var t = parseInt(s_temp[1]);//where house ends
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);//apple tree
    var b = parseInt(a_temp[1]);//orange tree
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);//number of apples
    var n = parseInt(m_temp[1]);//number of oranges
    apple = readLine().split(' ');
    apple = apple.map(Number);
    console.log(samGetsThisMany(a,apple,s,t));
    orange = readLine().split(' ');
    orange = orange.map(Number);
    console.log(samGetsThisMany(b,orange,s,t));
}

function samGetsThisMany(treeLocation, fallDistances, houseStart, houseEnd){
    var fallOnHouse = 0;
    for(var i=0; i<fallDistances.length; i++){
        var fruitLocation = treeLocation + (fallDistances[i]);
        if((houseStart <= fruitLocation) && (fruitLocation <= houseEnd)){
            fallOnHouse += 1;
        };
    }
    return fallOnHouse;
}

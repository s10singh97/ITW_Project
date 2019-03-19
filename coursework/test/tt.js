for(var i = 0; i < 13; i++){

    document.writeln("<img src = 'back.jpg' alt = 'image' height = 120 width = 90>")
}
document.writeln("<br>");
for(var i = 0; i < 13; i++){

    document.writeln("<img src = 'back.jpg' alt = 'image' height = 120 width = 90>")
}





function cgg(){
var suit = ["S", "C", "D", "H"];
var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var count1 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var count2 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var c1 = 0, c2 = 0, i = 0, j = 0;
var i, j, max1, max2;
var p = new Array(13);
var q = new Array(13);
var P = new Array(13);
var Q = new Array(13);

for(i = 0; i < 13; i++){
    do{
    p[i] = arr[Math.floor(Math.random() * 13)];
    var num = suit[Math.floor(Math.random() * 4)];
    }while((p[i]+num) == (p[i-1]+num));
    document.writeln("<img src = \"" + p[i] + num + ".png\" alt = \"image\" height = 120 width = 90>");
    P[i] = parseInt(p[i]);
}
document.writeln("<br>");
for(i = 0; i < 13; i++){
    do{
    q[i] = arr[Math.floor(Math.random() * 13)];
    var num = suit[Math.floor(Math.random() * 4)];
    }while((q[i]+num) == (q[i-1]+num));
    document.writeln("<img src = \"" + q[i] + num + ".png\" alt = \"image\" height = 120 width = 90>");
    Q[i] = parseInt(q[i]);
}

/*For frequency of individual element
count1 -> for player 1
count2 -> for player 2*/
for(i = 0; i < 13; i++){
    count1[P[i]-1]++;
    count2[Q[i]-1]++;
}

//Printing frequency
document.writeln("<br><br>");
for(i = 0; i < 13; i++){
    document.writeln(count1[i] + " ");
}
document.writeln("<br>");
for(i = 0; i < 13; i++){
    document.writeln(count2[i] + " ");
}

//max in count1
max1 = count1[0];
for(i = 1; i < 13; i++){
    if(count1[i] > max1){
        max1 = count1[i];
    }
}

//max in count 2
max2 = count2[0];
for(i = 1; i < 13; i++){
    if(count2[i] > max2){
        max2 = count2[i];
    }
}

//calcuting highest index if frequency is same
if(max1 == max2){
    while(max1 != count1[i]){
        i++;
    }
    while(max2 != count2[j]){
        j++;
    }
}

if(max1 > max2){
    document.writeln("<br><br>Player 1 wins");
}
else if(max1 == max2){
    if(i > j){
        document.writeln("<br><br>Player 1 wins");
    }
    else{
        document.writeln("<br><br>Player 2 wins");
    }
}
else{
    document.writeln("<br><br>Player 2 wins");
}
}
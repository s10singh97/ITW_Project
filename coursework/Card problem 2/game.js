var arr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

do{
    var a = arr[Math.floor((Math.random() * 13))];
    var b = arr[Math.floor((Math.random() * 13))];
}while(a == b);
do{
    var c = arr[Math.floor((Math.random() * 13))];
    var d = arr[Math.floor((Math.random() * 13))];
}while(c == d);

document.writeln(a);
console.log("a" + a);
document.writeln(b);
console.log("b" + b);
document.writeln("<br>" + c);
console.log("c" + c);
document.writeln(d);
console.log("d" + d);

if((a == c) || (a == d) || (b == c) || (b == d)){
    document.writeln("<br>You Won<br>Press Refresh to try again<br>");
}
else{
    document.writeln("<br>You lost<br>Press refresh to try again<br>");
}
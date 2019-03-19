var aa = window.prompt("Enter side 1", 0);
var a = parseInt(aa);

var bb = window.prompt("Enter side 2", 0);
var b = parseInt(bb);

var cc = window.prompt("Enter side 3", 0);
var c = parseInt(cc);

var s = (a + b + c)/2;

var p = s - a;
var q = s - b;
var r = s - c;
var ar = s*p*q*r;
var area = Math.pow(ar, (1/2));

document.writeln("Are of sides 3, 4, 5 is " + area);
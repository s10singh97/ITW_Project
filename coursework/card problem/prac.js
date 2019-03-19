do{
    a = Math.floor(1 + (Math.random() * 13));
    b = Math.floor(1 + (Math.random() * 13));
    c = Math.floor(1 + (Math.random() * 13));
    d = Math.floor(1 + (Math.random() * 13));
}while(a == b || a == c || a == d || b == c || b == d || c == d);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

document.writeln("<img src = \"card" + a + ".png\" alt = \"image\" height = 150 width = 150>");
document.writeln("<img src = \"card" + b + ".png\" alt = \"image\" height = 150 width = 150>");
document.writeln("<img src = \"card" + c + ".png\" alt = \"image\" height = 150 width = 150>");
document.writeln("<img src = \"card" + d + ".png\" alt = \"image\" height = 150 width = 150>");
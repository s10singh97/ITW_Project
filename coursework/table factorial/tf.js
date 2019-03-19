var fact = 1;

document.write("<h2>Factorial Table from 0 to 10</h2>");
document.writeln("<table width = 80% border = 1><tr><th>Number</th><th>Factorial</th></tr>");

for(var i = 0; i <= 10; i++){
    document.writeln("<tr><td style=\"text-align:center\">" + i + "</td><td style=\"text-align:center\">" + factorial(i) + "</td></tr>");
}

document.writeln("</table>");

function factorial(n){
    if(n == 0)
        return 1;
    else if(n == 1)
        return 1;
    else
        return (n * factorial(n - 1));
}
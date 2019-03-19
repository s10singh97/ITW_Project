var date, month, year, d, m, y;
date = window.prompt("Enter date", 0);
month = window.prompt("Enter month in integer", 0);
year = window.prompt("Enter year", 0);

d = parseInt(date);
m = parseInt(month);
y = parseInt(year);

var curr = new Date();

var curryear = curr.getFullYear();
var currmonth = curr.getMonth() + 1;
var currdate = curr.getDate();

var datediff = currdate - d;
var monthdiff = currmonth - m;
var yeardiff = curryear - y;

if(datediff < 0){
    datediff = 30 + datediff;
    currmonth--;
}

if(monthdiff < 0){
    monthdiff = 12 + monthdiff;
    curryear--;
}

yeardiff--;

document.writeln("Your age is "+ datediff + " days " + monthdiff + " months " +  yeardiff + " years ");
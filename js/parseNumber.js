document.write(Number("010"));
document.write('<br>');
document.write(Number(0x10));
document.write('<br>');
document.write(Number(""));
document.write('<br>');
document.write(Number("123hello"));
document.write('<br>');
document.write(Number(true));
document.write('<br>');
document.write(parseInt("070"));
document.write('<br>');
document.write(parseInt("070",8));
document.write('<br>');
document.write(parseInt("123Hello"));
document.write('<br>');
function pi(num){
	document.write(parseInt(num));
	document.write('<br>');
}
pi("0x11");
pi("");
pi("AF");
document.write(parseInt("AF",16));
document.write('<br>');
document.write(parseInt("0xaf",16));
	document.write('<br>');	
pi(-15);
document.write('<br>');
function pf(num){
	document.write(parseFloat(num));
	document.write('<br>');	
}
pf("-12.3")
pf("070");


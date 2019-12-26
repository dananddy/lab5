function test (k)
{
	var a= form1.data.value
	if (a !="" )
		form1.res.value= k*Math.pow(a,2)
	else
		alert ("Введіть значення")
}
function chpict(obj)
{
	if ((obj.elements[0]).checked)
		document.mypict.align="left"
	else
		document.mypict.align="right"
}
function rset(obj)
{
	document.mypict.align="left"
}
function Linechange()
{
	var line = document.getElementById("line");
	var a =Math.random()*200+30;
	var r = Math.random()*100;
	var b = "right";
	if (r<50) b = "right"; else b = "left";
	line.setAttribute("width", a);
	line.setAttribute("align", b);

} 
function formatin(obj)
{
	let text ="Опитуваний за статью - "
	if(obj.man.checked) text +="чоловік.";
	if(obj.woman.checked) text +="жінка.";
	if(obj.trans.checked) text ="Опитуваний свою стать не уточнив.";
	text+="\n";
	text+="Сімеййний стан особи - ";
	if(obj.mar.checked) text +="одружений/заміжня.";
	if(obj.nmar.checked) text +=" не одружений/заміжня.";
	if(obj.look.checked) text +="в активному пошуку.";
	if(obj.young.checked) text ="Наш опитуваний молодой і холостой.";
	text+="\n";
	text+="Вік опитуваного - ";
	text+= obj.age.value;
	let elem = document.getElementById("texts");
	elem.innerHTML = text;

}
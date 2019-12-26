var s=""
var sum=0
function gr(obj,m)
{
 	var r=100*(Number(((obj.elements[0])[m]).value)+1);
 	s+=((obj.elements[0])[m]).text+"\r\n";
 	obj.restext.value=s;
 	sum+=r;
 	obj.res.value=r;
} 
var sum=0
var q
var a
function eq()
{
 	q=test.question.value;
 	a=test.answer.value;
	if (a==q) sum +=1;
}
function result()
{
	document.test.res.value=sum
}

function ChangeCol(obj)
{
	let tabl = document.getElementById("tab");
	tabl.setAttribute("hight", "20px");
}
var shopbill=0
var counter=0;
var check;
var pt = document.getElementById("list");
pt="Рахунок:";
pt+='\n';
var t = ".";
function AddItem(obj)
{
	let price = Number(obj.item.value);
	if (t==".")
	{
		check=price;
		t="x";
	}
	if( check!=price) 
		{
			pt+=" x";
			pt+=counter;
			//pt+=" "+ obj.item.label;
			pt+='\n';
			list.innerHTML = pt;
			counter = 0; 
		}
	check = price;
	counter++;
	shopbill+=price*counter;

}
function billing()
{
	let a = document.getElementById("bil");
	a.innerHTML += "Ваш рахунок на суму - "+shopbill+" грн." + '\n' + "Дякуємо за покупку!";
}
function resbil()
{
	let b = document.getElementById("bil");
	pt = "Рахунок:"+'\n';
	list.inerHTML = pt;
	b.innerHTML=null;
	shopbill = 0;
}

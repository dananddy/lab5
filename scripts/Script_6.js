var s="Baм подобається: \r\n"
function set(vch)
{
	
	s+=vch + "\r\n"; 
	document.form1.area.value=s;
}
 function grant(obj)
 {
	 let k=0;
	 if ((obj.elements[0]).checked) 
	 	k+=Number(obj.elements[0].value);
	 if ((obj.elements[1]).checked)
	 	k+=Number(obj.elements[1].value);
	 if ((obj.elements[2]).checked)
	 	k+=Number(obj.elements[2].value);
	 obj.ww.value="Ваша винагорода "+k+" y.e."
 } 
 function calc(obj1, obj2, obj3, obj4)
 {
 	let k=0;
	if ((obj1.elements[0]).checked) 
	 	k+=Number(obj1.elements[0].value);
	if ((obj1.elements[1]).checked)
	 	k+=Number(obj1.elements[1].value);
	if ((obj1.elements[2]).checked)
	 	k+=Number(obj1.elements[2].value);
	if ((obj2.elements[0]).checked) 
	 	k+=Number(obj2.elements[0].value);
	if ((obj2.elements[1]).checked)
	 	k+=Number(obj2.elements[1].value);
	if ((obj2.elements[2]).checked)
	 	k+=Number(obj2.elements[2].value);
	if ((obj3.elements[0]).checked) 
	 	k+=Number(obj3.elements[0].value);
	if ((obj3.elements[1]).checked)
	 	k+=Number(obj3.elements[1].value);
	if ((obj3.elements[2]).checked)
	 	k+=Number(obj3.elements[2].value);
	if ((obj4.elements[0]).checked) 
	 	k+=Number(obj4.elements[0].value);
	if ((obj4.elements[1]).checked)
	 	k+=Number(obj4.elements[1].value);
	if ((obj4.elements[2]).checked)
	 	k+=Number(obj.elements[2].value);
	let elem = document.getElementById("ans");
	elem.innerHTML = k+ " - вартість вашого замовлення.";
 }
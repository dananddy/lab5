function square (a, h)
{   
	var s=(a*h)/2;   
	document.form1.param3.value = s;
	return s 
} 
function square_rec(obj) 
{
	obj.res.value=obj.num1.value* obj.num1.value
}
function ploscha_3t(obj)
{
	l1 = Math.sqrt(Math.pow((obj.x2.value-obj.x1.value),2)+Math.pow((obj.y2.value-obj.y1.value),2));
	l2 = Math.sqrt(Math.pow((obj.x3.value-obj.x2.value),2)+Math.pow((obj.y3.value-obj.y2.value),2));
	l3 = Math.sqrt(Math.pow((obj.x1.value-obj.x3.value),2)+Math.pow((obj.y1.value-obj.y3.value),2));
	p=(l1+l2+l3)/2;
	S=Math.sqrt(p*(p-l1)*(p-l2)*(p-l3));
	obj.res.value=S;
}
function vid_tochk(obj)
{
	obj.res.value = Math.sqrt(Math.pow((obj.x1.value),2)+Math.pow((obj.y1.value),2));
}
function chang_pos(obj)
{
	temp = obj.x.value;
	temp2 = obj.y.value;
	obj.x.value = temp2;
	obj.y.value = temp;
}
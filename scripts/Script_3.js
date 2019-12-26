function maxval (obj)
{     
	let a = Number(obj.num1.value);
	let b = Number(obj.num2.value);
	let c = Number(obj.num3.value);     
	obj.res.value=Math.max(Math.max(a,b),c);

} 
function max_in_line(obj)
{

	let word = obj.x.value;
	let max_let = word[0];
	let l = word.length;
	let k = 0;
	for (let i =1; i<l; i++) 
	{
		if (max_let<word[i]) max_let=word[i];
	}
	for (let i =0; i<l; i++) 
	{
		if (max_let==word[i]) k++;
	}
	obj.maxlet.value=max_let;
	obj.kmax.value = k;
}
function real_triangle(obj)
{
	let a = Number(obj.a.value);
	let b = Number(obj.b.value); 
	let c = Number(obj.c.value);
	if ((a + b < c) || (a + c < b) || (b + c < a) || (a<= 0) || (b<= 0) || (c<= 0))
		obj.answer.value = "Не існує";
	else obj.answer.value = "Існує";
}
function find_q(obj) 
{
	let x = Number(obj.x1.value);
	let y = Number(obj.x2.value);

	if ((x>0)&&(y>0)) obj.res.value = "I чверті";
	else
	if ((X>0)&&(y<0)) obj.res.value = "II чверті";
	else
	if ((x<0)&&(y<0)) obj.res.value = "III чверті";
	else
	if ((x<0)&&(y>0)) obj.res.value = "IV чверті";
	else
	if ((x==0)&&(y==0)) obj.res.value = "Початку координат!";
}
/*function cord_xy(obj)
{
	
}*/
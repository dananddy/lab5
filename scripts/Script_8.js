function nod(obj)
{
	var n=obj.num1.value
	var m=obj.num2.value
	var p = n%m
	while (p!=0)
	{
		n=m
		m=p
		p=n%m
	}
	
	pt="НСД:" +m;
	nsdd.innerHTML = pt;
}

function reverse(obj)
{
	var n=obj.num1.value
	var r=0;
	while (n>0)
	{
		r=r*10+(n%10);
		n=Math.trunc(n/10);
	}
	
	rotate.innerHTML = r;
}

function calc()
{
	var r=1;
	for (let i=0; i<999999;i++)
	{
		let n=i;
		let s=0;
		for (let j=0; j<3; j++)
		{
			s+=n%10;
			n=Math.trunc(n/10);
		}

		for (let j=0; j<3; j++)
		{
			s-=n%10;
			n=Math.trunc(n/10);
		}
		if (s==0) r++;
	}

	lucky.innerHTML = r;
}

function dil(obj)
{
	let n = obj.num.value;
	let s="Дільники заданого натурального числа"+"\n";
	for (let i=1; i<=n/2; i++)
	{
		if ((n%i)==0) s+=i+"\n";
	}
	s+=n;
	obj.data.value=s;
}
 function c1(obj)
 {
 	var t=new Date()
 	var h=t.getHours()
 	var m=t.getMinutes()
 	var s=t.getSeconds()
 	var res=""
 	if (h < 10)	res += "0"+h
 	else res += h

 	if (m < 10) res += ":0"+m
 	else res += ":"+m
 	
 	if (s < 10) res += ":0"+s
 	else res += ":"+s
 				
 	obj.rest.value = res
 }

 function fmon(mont)
 {
 	var s
 	switch (mont)
 	{
 		case 0: s="січень"; break;
 		case 1: s="лютий"; break;
 		case 2: s="березень"; break;
 		case 3: s="квітень"; break;
 		case 4: s="травень"; break;
 		case 5: s="червень"; break;
 		case 6: s="липень"; break;
 		case 8: s="вересень"; break;
 		case 9: s="жовтень"; break;
 		case 10: s="листопад"; break;
 		case 11: s="грудень"; break;
 	}
 	return s
 }  

 function gor(obj)
 {

 }

function ch(obj)
{
	var n = obj.fda.value;
	var s=""
	if (n>=1984) n=(n-1984) %60;
	else n=(60-(1984-n)) % 60;
	
	switch (Math.trunc(n/12))
 	{
 		case 0: s+="Зелений рік "; break;
 		case 1: s+="червоний рік "; break;
 		case 2: s+="жовтий рік "; break;
 		case 3: s+="білий рік "; break;
 		case 4: s+="чорний рік "; break;
		case -1: s+="червоний рік "; break;
		case -2: s+="жовтий рік "; break;
		case -3: s+="білий рік "; break;
		case -4: s+="чорний рік "; break;
 	}
 	switch (n%12)
 	{
 		case 0: s+="rat"; break;
 		case 1: s+="корови"; break;
 		case 2: s+="тигр"; break;
 		case 3: s+="зайця"; break;
 		case 4: s+="дракона"; break;
 		case 5: s+="змії"; break;
 		case 6: s+="коня"; break;
 		case 7: s+="вівці"; break;
 		case 8: s+="мавпи"; break;
 		case 9: s+="курки"; break;
 		case 10: s+="пса"; break;
 		case 11: s+="свині"; break;
		case -1: s+="корови"; break;
		case -2: s+="тигр"; break;
		case -3: s+="зайця"; break;
		case -4: s+="дракона"; break;
		case -5: s+="змії"; break;
		case -6: s+="коня"; break;
		case -7: s+="вівці"; break;
		case -8: s+="мавпи"; break;
		case -9: s+="курки"; break;
		case -10: s+="пса"; break;
		case -11: s+="свині"; break;
 	}
 	obj.fd.value = s;
}

function zod(obj)
{
	var this_month = obj.fmo.value;
	var date = obj.fda.value;
	if (this_month==1 && date>=20 || this_month==2 && date<=18) value="Водолей";
	else if (this_month==2 && date>=19 || this_month==3 && date<=20) value="Рыбы";
	else if (this_month==3 && date>=21 || this_month==4 && date<=19) value="Овен";
	else if (this_month==4 && date>=20 || this_month==5 && date<=20) value="Телец";
	else if (this_month==5 && date>=21 || this_month==6 && date<=21) value="Близнецы";
	else if (this_month==6 && date>=22 || this_month==7 && date<=22) value="Рак";
	else if (this_month==7 && date>=23 || this_month==8 && date<=22) value="Лев";
	else if (this_month==8 && date>=23 || this_month==9 && date<=22) value="Дева";
	else if (this_month==9 && date>=23 || this_month==10 && date<=22) value="Весы";
	else if (this_month==10 && date>=23 || this_month==11 && date<=21) value="Скорпион";
	else if (this_month==11 && date>=22 || this_month==12 && date<=21) value="Стрелец";
	else if (this_month==12 && date>=22 || this_month==1 && date<=19) value="Козерог";
	else value="Неверная дата!";

	if ((date<1)||(this_month==2 && date>29)) value = "Неверная дата!";
	if (this_month==(1||3||5||7||8||10||12) && date>31) value = "Неверная дата!";
	if (this_month==(4||6||9||11) && date>30) value = "Неверная дата!";
	obj.fd.value = value;
}
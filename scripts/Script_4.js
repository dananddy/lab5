function chan(obj)
{      
	var r1=Number(obj.a1.value)      
	var r2=Number(obj.a2.value)      
	if ((r1<1)||(r1>3)||(r2<1)||(r2>3))         
		alert ("Неправильно задані номери зображень!")      
	else
		{         
			var z=document.images[r1-1].src         
			document.images[r1-1].src=document.images[r2-1].src;         
			document.images[r2-1].src=z      
		} 
} 
 function imgn(n, action)
 {      
 	if (action)     
 		{          
 			document.images[n+2].src="../pics/wp"+n+".jpg"      
 		}
 		else
 			{          
 				document.images[n+2].src="../pics/p"+n+".jpg"      
 			}   
}   
function push_bot() {   
    
	var a2 = document.images[6].src         
	document.images[6].src=document.images[7].src;         
	document.images[7].src= document.images[8].src;   
	document.images[8].src = a2;
 	    
}
function zooming()
{
	var image = document.getElementById("zoom_img");
	image.height = 340;
	image.width =340;
}
function unzooming()
{
	var image = document.getElementById("zoom_img");
	image.height = 120;
	image.width = 120;
}
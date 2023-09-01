function power()
{     
let number=prompt("Supply the number you want to check")    
let value=prompt("supply the range of the power of 2")
let mul=1;
i=1;
while(i<=value)
{
mul=mul*2
if(number==mul)
{
 id.innerHTML="The power of "+number+"=2"+"<sup>"+i+"</sup>"
 break
} 
else{
id.innerHTML="Op! The number does not belong to the power of 2 :(";
}
i++;
if(number==1)
{
 id.innerHTML="The power of  "+number+"=2"+"<sup>0</sup>"
}
 }
console.log(mul)
}
import React from "react"
import { useState } from "react";
function Debi()
{
const [num,setNum] = useState('');
const [answer,setAns] = useState('');
const [answer1,setAns1] = useState('');
const [answer2,setAns2] = useState('');
const handlClick=(e)=>{
 e.preventDefault();
   let  num1=parseInt(num) ,n=parseInt(num),n2=parseInt(num),ans=0,x=1,rem,
   ans1="",rem1,s="0123456789ABCDEF", ans2=0,rem2,pow=1;
   while(num1>0)
  
   {
     rem=num1%2;
     ans=ans+rem*x;
     num1=parseInt(num1/2);
     x=x*10;
   }
   setAns(ans);
   while(n>0)
	{
		rem1=n%16;
		ans1=s[rem1]+ans1;
		n=parseInt(n/16);
	}
    setAns1(ans1);
    while(n2>0) //214>0  t/26>0 t //0<0 f
		{
			rem2=n2%8;   //rem=214%8=6// rem =26%8=2//3%8=3
			ans2=ans2+rem2*pow;  //ans=0+6*1=6//ans=6+2*10=26//26+3*100=326
			n2=parseInt(n2/8);  //214/8=26//26/8=3//3/8=0
			pow=pow*10; //pow=1*10=10//100 //1000
		} 
        setAns2(ans2);
}

return (
 <div className='d-flex color1 vh-100 justify-content-center align-items-center '>
   <div className='bg-white w-50 p-5 rounded'>
     <form onSubmit={handlClick}>
       <label htmlFor='' className='mb-3'>Decimal Number</label>
        <input type='text' className='form-control ms-3' 
        onChange={(e)=>setNum(e.target.value)}></input>
        <button type='btn' className='btn btn-success ms-3 mt-3'>Convert</button>
     </form>
     <h5 className='mt-3 '>Binary Number:{answer}</h5>
     <h5 className='mt-3 '>Hexadecimal Number:{answer1}</h5>
     <h5 className='mt-3 '>Octal Number:{answer2}</h5>
   </div>
 </div>
);
}


export default Debi;

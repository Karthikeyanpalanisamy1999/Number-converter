import React from "react"
import { useState } from "react";
function Dehe() {
    const [num,setNum] = useState('');
    const [answer,setAns] = useState('');
    const [answer1,setAns1] = useState('');
    const [answer2,setAns2] = useState('');
    const handlClick=(e)=>{
     e.preventDefault();
     let  n=parseInt(num),n1=parseInt(num),n2=parseInt(num),ans=0,rem,p=0,t,c=1,b=0,a,s1,s,a1;
     s="0123456789ABCDEF";
	s1="";
	while(n>0)
	{
		rem=n%10;
		t=Math.pow(2,p);
		ans=ans+rem*t;
		n=parseInt(n/10);
		p++;
	}
    setAns(ans);
    n1=ans;
    while(n1>0)		//67>0//8>0//1>0//0>0false
	{
		a=n1%8;		//67%8=3//n%8=0/1%10=1	
		b=b+a*c;	//b=0+3*1=3//b=3+0*10=3//b=3+1*100=103
		n1=parseInt(n1/8);	//n=67/8=8//8/8=1//1/8=
		c=c*10;		//c=1*10=10//c=10*10=100//
	}
    setAns2(b);
    n2=ans;
    while(n2>0)	//200>0//12>0//0>0false
	{
		a1=n2%16;		//a=200%16=8//12%16=12	
		s1=s[a1]+s1;	//s1=8+0=8//c+8=c8
		n2=parseInt(n2/16);	//n=200/16=12//12/16=0.75	
	}
    setAns1(s1);		
    }
   
    return (
     <div className='d-flex color1 vh-100 justify-content-center align-items-center '>
       <div className='bg-white w-50 p-5 rounded'>
         <form onSubmit={handlClick}>
           <label htmlFor='' className='mb-3'>Binary Number</label>
            <input type='text' className='form-control ms-3' 
            onChange={(e)=>setNum(e.target.value)}></input>
            <button type='btn' className='btn btn-success ms-3 mt-3'>Convert</button>
         </form>
         <h5 className='mt-3 '>Decimal Number:{answer}</h5>
         <h5 className='mt-3 '>Hexadecimal Number:{answer1}</h5>
         <h5 className='mt-3 '>Octal Number:{answer2}</h5>
       </div>
     </div>
  )
};

export default Dehe;

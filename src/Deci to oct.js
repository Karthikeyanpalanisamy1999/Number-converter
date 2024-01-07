import React from "react"
import { useState } from "react";
function Deoc() {
    const [num,setNum] = useState('');
    const [answer,setAns] = useState('');
    const [answer1,setAns1] = useState('');
    const [answer2,setAns2] = useState('');
    const handlClick=(e)=>{
     e.preventDefault();
     let n=parseInt(num),a,b,c,d,x,a1,s,s1,n1,c11=1,b11=0,a11,n11;
     b=0;
     c=0;
     s="0123456789ABCDEF";
     s1="";
     while(n>0)	//53>0//5<0//0>0false
     {
       a=n%10;		//53%10=3//5%10=5		
       x=Math.pow(8,c);	//8pow0//8pow1
       b=b+(a*x);		//b=0+3*1=3//3+5*8=43
       c++;		//1//2
       n=parseInt(n/10);	//n=53/10=5//5/10=0.5	
     }
     n1=b;	//43
     while(n1>0)	//43>0//2>0//0<0false
     {
       a1=n1%16;		//43%16=11//2%16=2		
       s1=s[a1]+s1;	//s1=B+0=B//2+B=2B
       n1=parseInt(n1/16);	//43/16=2//2/16=0.8	
     }		
      setAns1(s1);
      setAns2(b);
      n11=b;
      while(n11>0)	//43>0//21>0//10>0//5>0//2>0//1>0//0>0fale
	{
		a11=n11%2;		//43%2=1//21%2=1//10%2=0//5%2=1//2%2=0//1%2=1
		b11=b11+a11*c11;		//b1=0+1*1=1//1+1*10=11//11+0*1000=11//11+1*1000=1011//1011+0*100000=1011//1011+1*100000=101011
		n11=parseInt(n11/2);	//n1=43/2=21//21/2=10//10/2=5//5/2=2//2/2=1//1/2=0.5
		c11=c11*10;		//c1=1*10=10//10*10=100//100*10=1000//1000*10=10000//10000*10=100000//100000*10=1000000
	}
  setAns(b11);
    }
    
    return (
     <div className='d-flex color1 vh-100 justify-content-center align-items-center '>
       <div className='bg-white w-50 p-5 rounded'>
         <form onSubmit={handlClick}>
           <label htmlFor='' className='mb-3'>Octal Number</label>
            <input type='text' className='form-control ms-3' 
            onChange={(e)=>setNum(e.target.value)}></input>
            <button type='btn' className='btn btn-success ms-3 mt-3'>Convert</button>
         </form>
         <h5 className='mt-3 '>Binary Number:{answer}</h5>
         <h5 className='mt-3 '>Hexadecimal Number:{answer1}</h5>
         <h5 className='mt-3 '>Decimal Number:{answer2}</h5>
       </div>
     </div>
  )
};

export default Deoc;

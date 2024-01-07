import React from "react"
import { useState } from "react";
function Hexa() {
    const [num,setNum] = useState('');
    const [answer,setAns] = useState('');
    const [answer1,setAns1] = useState('');
    const [answer2,setAns2] = useState('');
    const handlClick=(e)=>{
     e.preventDefault();
     let n=num,n1,n2,a,b,c,c1=1,b1=0,a1,n3;
	c=1;
	b=0;
	n1=parseInt(n,16);	
	n2=n1;
	while(n2>0)	
	{
		a=n2%2;		
		b=b+a*c;	
		n2=parseInt(n2/2);	
		c=c*10;		
	}

     setAns(n1);
     setAns1(b);  
     n3=n1;
     while(n3>0)	
	{
		a1=n3%8;		
		b1=b1+a1*c1;	
		n3=parseInt(n3/8);	
		c1=c1*10;		
	}
    setAns2(b1);
    }
    
    return (
     <div className='d-flex color1 vh-100 justify-content-center align-items-center '>
       <div className='bg-white w-50 p-5 rounded'>
         <form onSubmit={handlClick}>
           <label htmlFor='' className='mb-3'>hexa Number</label>
            <input type='text' className='form-control ms-3' 
            onChange={(e)=>setNum(e.target.value)}></input>
            <button type='btn' className='btn btn-success ms-3 mt-3'>Convert</button>
         </form>
         <h5 className='mt-3 '>Binary Number:{answer1}</h5>
         <h5 className='mt-3 '>decimal Number:{answer}</h5>
         <h5 className='mt-3 '>Octal Number:{answer2}</h5>
       </div>
     </div>
    )
};

export default Hexa;

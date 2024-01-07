import React from "react"
import { FaHandPointRight } from "@react-icons/all-files/fa/FaHandPointRight";
import { useNavigate } from "react-router-dom";
function Main() {
    const navigate = useNavigate();
    
  return (
    <div>
      <div className="d-flex bg-dark vh-100 justify-content-center align-items-center">
      <h1 className="text-warning  ">Number converter</h1>
        <h3 className="text-white ms-2">< FaHandPointRight/></h3>
        <h3 className="text-white ms-2">< FaHandPointRight/></h3>
        <h3 className="text-white ms-2">< FaHandPointRight/></h3>
        <button className="btn btn-primary ms-3" onClick={()=> navigate('/debi')} >Decimal to Others</button>
        <button className="btn btn-primary ms-3 " onClick={()=> navigate('/dehe')}>Binary to Others</button>
        <button className="btn btn-primary ms-3" onClick={()=> navigate('/deoc')}>Octal to Others</button>
        <button className="btn btn-primary ms-3"onClick={()=> navigate('/hexa')} >Hexadecimal to Others</button>
      </div>
    </div>
  )
};

export default Main;
import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
import { day, month } from "../../faker/mdy";
import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { createToast } from "../../Helpers/Helper";
import { CgDanger } from "react-icons/cg";

  import { isEmail } from "../../Helpers/Helper";
  import { isMobile } from "../../Helpers/Helper";

 //get facebook years

 //const years = Array.from({
   //length : 100}, (_, i) => new Date().getFullYear() - i);

const years = Array.from({
  length : new Date().getFullYear() -1900 }, (_, i) =>1900 + i).reverse()  ;

const Modal = ({children, hide}) => {

  // const [gender, setgender] = useState('');

  const [input, setInput] = useState({
    first_name :  "",
    sur_name :  "",
    moe  :   "",
    password :  "",
    day :  "",
    month :  "",
    year :  "",
    gender :  ""

  });


  const [border, setBorder] = useState({
    first_name :   true,
    sur_name :   true,
    moe  :   true,
    password :   true,
    day :   true,
    month :   true,
    year :   true,
    gender :   true,

  });


  const handleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }


  // handle user register

  const handleUserRegister = (e) =>{
       e.preventDefault();

       // validation
       if(!input.first_name || !input.sur_name || input.moe || input.password){
        createToast("all fields are required");
       }else{
        if(!isEmail(input.moe)){
          createToast('Email Is"t valid')
         }else if(!isMobile(input.moe)){
          createToast("Mobile Is't valid")
         }else{
          createToast("Data stable", "success")
         }
  
       }

       // Isemail & Ismobile & Isotp &IsPass validation

       

  }
  
  // handle input blur
  const handleInputBlur = (e) =>{
    if(e.target.value === ""){
      setBorder((prevState) =>({
        ...prevState,
        [e.target.name] : false
      }))
    }else{
      setBorder((prevState) =>({
        ...prevState,
        [e.target.name] : true
      }))
    }
  }

 

  return (
    <>
    <div className="modal-blur-area">
      <div className="modal-container">
        <div className="modal-header">
            <div className="header-content">
                <h2>Sign Up</h2>
                <p>Its Quick and easy</p>
            </div>
            <button onClick={() => hide(false)}> <LiaTimesSolid /></button>
        </div>
        <div className="modal-body">
        <form onSubmit={handleUserRegister} className="sign-up-form">
        <div className="h-form">

          <div className="first-name">
          <input 
           className={border.first_name ? "" : "red-border visible"}
           type="text" placeholder="First Name" name="first_name" value={input.first_name} onChange={handleInputValue} onBlur={handleInputBlur}/>
           {border.first_name ? "" : < CgDanger/>} 

          </div>

         <div className="last-name">
         <input className={border.sur_name ? "" : "red-border"} type="text" placeholder="Sure Name" name="sur_name" value={input.sur_name} onChange={handleInputValue} onBlur={handleInputBlur}/>
         {border. sur_name ? "" : < CgDanger/>} 
         </div>

        </div>
        
        <div className="moe">
        <input className={border.moe ? "" : "red-border"} type="text" placeholder="Mobile number or Email address" name="moe" value={input.moe} onChange={handleInputValue} onBlur={handleInputBlur}/>
         {border.moe ? "" : < CgDanger/>} 

        </div>

          <div className="pass">
          <input className={border.password ? "" : "red-border"} type="text" placeholder="New Password" name="password" value={input.password} onChange={handleInputValue} onBlur={handleInputBlur}/>
          {border.password ? "" : < CgDanger/>} 

         
          </div>
        
         <div className="reg-extra">

             

          <span className="reg-extra-title">Date of birth <AiFillQuestionCircle /></span>
          <div className="reg-extra-opt">
               
            <select className={border.day ? "" : "red-border"} name="day" value={input.day} onChange={handleInputValue} onBlur={handleInputBlur}>
            <option value="">Day</option>
            {day ?.map((item, index) =>(
              <option value={item} key={index} selected={new Date().getDate() === item ? true : false}>{item}</option>
            ))}
            </select>

            <select className={border.month ? "" : "red-border"} name="month" value={input.month} onChange={handleInputValue} onBlur={handleInputBlur}>
             
            <option value="">Month</option>
            {month ?.map((item, index) =>(
              <option value={item} key={index} selected={new Date().getMonth() === item ? true : false}>{item}</option>
            ))}

              </select>

              <select className={border.year ? "" : "red-border"} name="year" value={input.year} onChange={handleInputValue} onBlur={handleInputBlur}>
              <option value="">{new Date().getFullYear()}</option>
              {years ?.map((item, index) =>(
                 <option value={item} key={index}>{item}</option>
              ))}
              </select>
          </div>
         {border.day && border.month && border.year ? "" :  <CgDanger className="svg-danger"/>}
         </div>

         <div className="reg-extra">
          <span className="reg-extra-title">Gender<AiFillQuestionCircle /></span>
          <div className="reg-extra-opt">
            
             <label>
             <span>Female</span>
             <input name="gender" type="radio" value="Female" onChange={() => setInput("Female")} onChange={handleInputValue}/>
             </label>
            
            <label>
            <span>Male</span>
             <input name="gender" type="radio" value="Male" onChange={() => setInput("Male")} onChange={handleInputValue}/>
             </label>
              
             
              <label>
              <span>Custom</span>
             <input name="gender" type="radio" value="Custom" onChange={() => setInput("Custom")} onChange={handleInputValue}/>
              </label>

              
          </div>
         </div>

              <p>People who use our service may have uploaded your contact information to Facebook. <Link>Learn more</Link></p>

              <p>By clicking Sign Up, you agree to our <Link>Terms,</Link> <Link>Privacy Policy</Link> and <Link>Cookies Policy.</Link> You may receive SMS notifications from us and can opt out at any time.</p>
             
               <button type="submit">Sign up</button>

         </form> 
         
             </div>
        </div>
    </div>
    </>
  )
}

export default Modal
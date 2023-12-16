import { Link } from "react-router-dom";
import Meta from "../../Components/Meta/Meta";
import "./Auth.scss"
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import { createToast } from "../../Helpers/Helper";

const Auth = () => {

   const [modal, setModal] = useState(false);

   const [input, setInput] = useState({
    moe : "",
    password : "",
   });


   const handleInputValue = (e) =>{
    setInput((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
   }

   // form validatio

   const handleInputLogin = (e) =>{
        e.preventDefault();

        //validation
        if(!input.moe || !input.password){
          createToast("All fields are required")
        }else{
          createToast("Data stable")
        }
   }


  return (
    <>
    <Meta title="facebook - log in or sign up"/>

    {modal &&(
  <Modal hide={setModal}>




  </Modal>
)}
     
     <div className="fb-auth-area">
        <div className="fb-auth-container">
           <div className="fb-auth-left">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
           </div>

           <div className="fb-auth-right">
             <div className="fb-auth-box">
               <form action="">
                 <input type="text" placeholder="Email or phone number" name="moe" value={input.moe} onChange={handleInputValue}/>
                 <input type="password" placeholder="Password" name="password" value={input.password} onChange={handleInputValue}/>
                 <button className="login-button" onSubmit={handleInputLogin}>Log in</button>
               </form>
               <Link to="">Forgotten password</Link>
               <div className="divider"></div>
               <button className="create-button" onClick={() => setModal(true)}>Create new account</button>

             </div>
             <p className="fb-auth-desc"><Link>Create a Page</Link> for a celebrity, brand or business.</p>
           </div>
        </div>
     </div>

    </>
  )
}

export default Auth
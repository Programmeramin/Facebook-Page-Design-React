import "./Home.scss"
import { IoMdPeople } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineBarChart } from "react-icons/md";
import { GiBonsaiTree } from "react-icons/gi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { GiEternalLove } from "react-icons/gi";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SiFacebookgaming } from "react-icons/si";
import { GoClockFill } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GrTemplate } from "react-icons/gr";
import { FaRegFlag } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {

  const [collapse, setCollapse] = useState(false);


 
    return (
      <>

    

     <div className="leftbar">
          <div className="leftbar-container">
   
             <div className="leftbar-element">
               <ul>
                   <li>
                   <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/346051613_254309320403131_1156063062724532570_n.jpg?_nc_cat=108&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFora1wByerFkP5HZ4-gpQcgyfq9DL_PLCDJ-r0Mv88sOFTa7E_kaxqdxjP3ZLJpSMEbAdFSX7IhH_xfS2Vuy6k&_nc_ohc=6doRK7GggEwAX9-rSGV&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAiTl0Dlg5LgFCdsvZdyT5LGuVx0h_tDSS-ecRz9zdD0A&oe=6589C2F1" alt="" />
                   <span>Md Amin Islam</span>
                   </li>
                   <li>
                   <IoMdPeople/>
                   <span>Friends</span>
                   </li>
                   <li>
                       <FaBullhorn/>
                       <span>Ad Center</span>
                   </li>
   
                  <li>
                    <VscFeedback/>
                    <span>Feeds</span>
                  </li>
                  <li>
                    <MdGroups/>
                    <span>Groups</span>
                  </li>
                  <li>
                   <AiOutlineShop/>
                   <span>Markets</span>
                  </li>
   
                  <div className={`long-list ${collapse ? "expended" : ""}`}>
   
            <li>
           <MdOutlineBarChart/>
            <span>Ads Manager</span>
            </li>
      
            <li>
            <GiBonsaiTree/>
            <span>Climate Science Center</span>
            </li>
      
           <li>
           <BiSolidCalendarStar/>
           <span>Events</span>
           </li>
      
           <li>
             <GiEternalLove/>
            <span>Fundraisers</span>
            </li>
   
            <li>
               <SiFacebookgaming/>
               <span>Gaming Video</span>
            </li>
   
            <li>
               <GoClockFill/>
               <span>Memorise</span>
            </li>
   
            <li>
             <FaFacebookMessenger/>
             <span>Messanger</span>
            </li>
   
            <li>
             <FaFacebookMessenger/>
             <span>Messanger Kids</span>
            </li>
   
             
          <li>
           <GrTemplate/>
           <span>Orders and Payments</span>
          </li>
   
          <li>
           <FaRegFlag/>
           <span>Pages</span>
          </li>
   
          <li>
           <FaGamepad/>
           <span>Play Games</span>
          </li>
   
          <li>
           <MdSpaceDashboard/>
           <span>Professional Dashboard</span>
          </li>
   
           <li>
             <MdOndemandVideo/>
             <span>Video</span>
           </li>
   
            </div>
   
   
                 
            <li className="last-list" onClick={() => setCollapse((prev) => !prev)}>
          <IoIosArrowDown/>
          <span>See more</span>
         </li>
         
   
               </ul>
             </div>
   

            <div className="shortcuts">
               
               <div className="short-head">
                <h1>Your shortcuts</h1>
                <Link>Edit</Link>
               </div>

            </div>

          </div>
      </div>

     
  
      </>
     )
  

 
}

export default Home
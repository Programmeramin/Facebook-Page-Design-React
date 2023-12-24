// dependencies
import { Link } from "react-router-dom";
import "./Header.scss";
import { IoIosSearch } from "react-icons/io";
import { RiHome5Fill, RiGroup2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { LuGamepad2 } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiMiniBell } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Badge } from "react-bootstrap";

const Header = () => {
  return (
    <>
    
    <header className="header">
      <div className="container header-container">
          <div className="header-left">
            <div className="logo">
              <Link><img className="w-100 " src="https://img.freepik.com/premium-vector/facebook-app-icon-social-media-logo-vector-illustration-meta_277909-402.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais" alt="" /></Link>
            </div>
            <div className="search">
              <form action="">
                <span><IoIosSearch/>
                <input type="search" placeholder="Search Facebook"/>
                </span>

              </form>
            </div>
          </div>
          <div className="header-middle">
            <ul>
              <li><Link><RiHome5Fill/></Link></li>
              <li><Link><MdOndemandVideo/></Link></li>
              <li><Link><AiOutlineShop/></Link></li>
              <li><Link><BsPeople/></Link></li>
              <li><Link><LuGamepad2/></Link></li>
            </ul>
          </div>

          <div className="header-right">
            <ul>
              <li><Link><TbGridDots/></Link></li>
              <li><Link><FaFacebookMessenger/></Link></li>
              <li><Link><HiMiniBell/></Link></li>
              <li><Link>
              <img style={{width : "40px", height : "40px", borderRadius : "50px"}} src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/399619216_1389788521893712_8430324706781959247_n.jpg?_nc_cat=100&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFhyJJT6xsJz_F47bREhfQoVYW7p-AF14lVhbun4AXXiRuAyLlFzzmH--1iKhUerM9zC8YpRqwtyIQ2wWMMaSVe&_nc_ohc=EImimcv5eMkAX_Q99fo&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB0sX2QlJc3X2RhKpJ4KssqqteesgOsYX3EF__qK2tE5A&oe=65889D6D" alt="" />
              </Link><MdOutlineKeyboardArrowDown/></li>
            </ul>
          </div>

      </div>
    </header>

    </>

  )
};

export default Header;
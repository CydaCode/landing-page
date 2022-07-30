// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from "./SidebarData";
// import { IconContext } from 'react-icons'
// import { NavbarSection } from "./NavBar.style";
// // import { icons } from "react-icons";

// function Nav()  {
//     const [sidebar, setSidebar] = useState(false)

//     const showSidebar =()=> setSidebar(!sidebar)
//     return(
//         <NavbarSection className="all">
        
//         <IconContext.Provider value={{color: '#f69312'}}>
//         <div className='class-width '>
//         <div className='logo-text'>
//           <div className='imgs'>
//              <img src="/src/assets/Logo.png" alt="" /> 
//            </div>
//            <small>Mentorship and Open-source</small>
//          </div>
//         <div className="nav-width container">
        
//             <Link to='#' className="menu-bars">
//                 <FaIcons.FaBars onClick={showSidebar}/>
//             </Link>
                
//                     <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
//                         <ul className="nav-menu-items" onClick={showSidebar}>
//                             <li className="navbar-toggle " >
//                                 <Link to='#' className="menu-bars">
//                                     <AiIcons.AiOutlineClose />
//                                 </Link>
//                             </li>
//                             {SidebarData.map((items, i) => {
//                                 return (
//                                     <li key={i} className={items.cName}>
//                                         <Link to={items.path}>
//                                             <span>{items.title}</span>
//                                         </Link>
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     </nav>     
//         </div>
//         </div>
//         </IconContext.Provider>
        
//     </NavbarSection>
//     )
// }

// export default Nav;







import React from 'react'
import {NavbarSection} from './NavBar.style'
import {SidebarData} from './SidebarData'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar =()=> setSidebar(!sidebar)
  return (
    <NavbarSection>
      <IconContext.Provider value={{color: '#f69312'}}></IconContext.Provider>
      <div className='class-width '>
      <div className='logo-text'>
        <div className='imgs'>
          <img src="/src/assets/Logo.png" alt="" /> 
        </div>
        <small>Mentorship and Open-source</small>
      </div>

      <Link to='#' className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
      <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSidebar}>
          <li className="navbar-toggle " >
              <Link to='#' className="menu-bars">
                  <AiIcons.AiOutlineClose />
              </Link>
          </li>
          {SidebarData.map((items, i) => {
                return (
                  <li key={i} className={items.cName}>
                      <Link to={items.path}>
                            <span>{items.title}</span>
                      </Link>
                  </li>
                )
            })}
        </ul>
      </nav>
      </div>
    </NavbarSection>
    
  )
}

export default NavBar

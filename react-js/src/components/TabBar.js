import { useLayoutEffect } from "react"
import { React} from "react"
import { FaReact,FaShoppingCart, FaUser, FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'

const TabBar = () => {
    return(
       <nav className="nav">
           <ul>
               <li className="logo"><Link to="/"><FaReact/></Link></li>
               <div className="searchBar">
                  <li>
                      <select>
                          <option>SearchinBUNDOE</option>
                          <option>SearchinLAZADA</option>
                          <option>SearchinShoppee</option>
                      </select>
                  </li>
                  <li className="search">
                      <input placeholder="Search for anything"/>
                      <lable className="search-icon">
                      <span><FaSearch values="search"/>Search</span>
                      </lable>
                  </li>
                  </div>
                  <div className="language">
                  <li>
                     
                      <select>
                          <option>Eng</option>
                          <option>JN</option>
                          <option>Thai</option>
                      </select>
                     
                      
                  </li>

                 <li>
                 <FaShoppingCart/>
                 </li>
                 <li>
                 <FaUser/>
                 </li>
   
               </div>
           </ul>
       </nav>
    )
}

export default TabBar

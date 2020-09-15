import React, {Component} from 'react';

import {data} from '../data.js';
import {Link} from 'react-router-dom';

class Header extends Component {
render(){
  return (
  
      <header>
<div className="topheading">
      <h1 className="title">{data.site.title}</h1>
      <Link to="/"><img  className="logo" src="https://www.realtor.com/realtor-com.png" alt="logoImage"/></Link>
     <h4 className="profilename"> <Link to="/profile">
      Welcome {data.profile.firstName}
     </Link>
      </h4>
    </div>
  
      </header>
    
  );

}
}

export default Header;
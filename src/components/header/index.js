import React from 'react';
import Nav from "../../components/nav";

function Header(props) {
  return (
    <header className="flex-row px-1">
  
  <h1>Marco Evangelista</h1>   
  <Nav {...props}/>
  <div className="wrapper">
  <iframe src="https://marcobjj.github.io/react-portfolio/clouds/index.htm"></iframe>
  </div>
  </header>
  
  );
}

export default Header;
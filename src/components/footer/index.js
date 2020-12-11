import React from 'react';
import {ReactComponent as Icon} from '../../assets/images/github-logo.svg';

function Footer(p) {

    function gotoGit () {

        window.location = "https://www.github.com/marcobjj"
    }
  return (
    <footer>
  
  {/* <Icon width="30" onClick={gotoGit} height="30" /> */}
  <a href="https://www.github.com/marcobjj"><img width="30" height="30" src={require("../../assets/images/github-logo.svg").default}/></a>
  <a href="https://www.linkedin.com/in/marco-evangelista-ab92691b2/"><img height="30" src={require("../../assets/images/linkedin.svg").default}/></a>

  </footer>
  
  );
}

export default Footer;
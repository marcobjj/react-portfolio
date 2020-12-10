import React from 'react';
import {ReactComponent as Icon} from '../../assets/images/github-logo.svg';


function Project (props) {

 const   {name, image, git, url} = props;


function gotoUrl ()
{

    window.location = url;
}

function gotoGit ()
{

    window.location = git;
}


return (
    <div className="col">
      <div className="project"  style={{backgroundImage: `url(${require(`../../assets/images/${image}`).default})`}}>

      {/* <img src={require(`../../assets/images/${image}`).default}/> */}

      <div className="project-title">


          <h6 onClick={gotoUrl}>{name}</h6> <Icon onClick={gotoGit} className="git" />

      </div>

    </div>
    </div>
)
}


export default Project;
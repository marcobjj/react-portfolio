import React from 'react';
import {ReactComponent as Icon} from '../../assets/images/github-logo.svg';


function Project (props) {

 const   {name, image, git, url, descr, tech} = props;


function gotoUrl ()
{

    window.location = url;
}

function gotoGit ()
{

    window.location = git;
}


return (
    <div className="col flex-center">
      <h6 >{name}</h6>
      <div className="project"  style={{backgroundImage: `url(${require(`../../assets/images/${image}`).default})`}}>

      {/* <img src={require(`../../assets/images/${image}`).default}/> */}

      <div className="project-title">

          <h6 onClick={gotoUrl}>Deployment</h6> | <h6 onClick={gotoGit}>Repository</h6>
          {/* <h6 onClick={gotoUrl}>{name}</h6> <Icon onClick={gotoGit} className="git" /> */}

      </div>

    </div>
        <p className="description">{descr}.</p>
        <p className="description">Technologies - {tech}</p> 
    </div>
)
}


export default Project;
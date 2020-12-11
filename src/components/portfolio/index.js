import React from 'react';
import Project from "../../components/project";


function Portfolio() {

    const projects = [{name:"Employment App",url:"https://stark-atoll-20406.herokuapp.com/",git:"https://github.com/gtankha/employment-app",image:"empl.png"},
    
    {name:"Bootcamp Travel",url:"https://bootcamp-travel.herokuapp.com/",git:"https://github.com/gtankha/bootcamptravel",image:"bootcamp.png"},
    {name:"Monaco GP",url:"https://marcobjj.github.io/monaco/", git:"https://github.com/marcobjj/monaco" ,image:"monaco.png"}]


  return (
    <section className="my-5">
    <div className="row">

    {projects.map(project => 
    //... before to pass all of the properties in the project object
    <Project {...project} key={project.name}/>

    )}
    
    </div>
  </section>
  
  );
}

export default Portfolio;
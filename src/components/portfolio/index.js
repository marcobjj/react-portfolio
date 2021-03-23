import React from 'react';
import Project from "../../components/project";


function Portfolio() {

    const projects = [{name:"Employment App",url:"https://stark-atoll-20406.herokuapp.com/",git:"https://github.com/gtankha/employment-app",image:"empl.png",descr:'"Tinder for Employers and Job Seekers"',tech:"Handlebars, SQL"},
    {name:"Media Store",url:"https://floating-badlands-78581.herokuapp.com/",  git:"https://github.com/gtankha/media-store" ,image:"media-store.png",descr:"E-commerce application with live auctions",tech:"MongoDB,React,Redux"},
    {name:"Bootcamp Travel",url:"https://bootcamp-travel.herokuapp.com/",git:"https://github.com/gtankha/bootcamptravel",image:"bootcamp.png",descr:"Frontend travel site that makes API calls",tech:"Javascript, UIkit"},
    {name:"Monaco GP",url:"https://marcobjj.github.io/monaco/", git:"https://github.com/marcobjj/monaco" ,image:"monaco.png",descr:"Javascript recreation of 16-bit era game",tech:"Html5,Javascript"},
    {name:"The Tech Blog",url:"https://guarded-ocean-23470.herokuapp.com/", git:"https://github.com/marcobjj/mvc-tech-blog" ,image:"blog.png" , descr:"Content Management System style blog that uses MVC architecture",tech:"SQL,Sequelize,Handlebars"},
    {name:"Budget Tracker",url:"https://arcane-reaches-16409.herokuapp.com/",  git:"https://github.com/marcobjj/budget-tracker" ,image:"budget.png",descr:"A graphical interface and database to keep track of earnings and expenses",tech:"Express.js,MongoDB,IndexDB,PWA"}
  ]




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
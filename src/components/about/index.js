import React from 'react';


function About() {
  return (
    <section className="my-5">
      <div className="about">
    <h1 id="about">Who am I?</h1>
    
     <img src={require(`../../assets/images/self.jpg`).default} className="my-2" width="574" height="360" alt="cover" />
  <p>Full Stack Developer (MERN)</p>

  <p>Coding Bootcamp Graduate from UC Berkeley</p>
  <p>Bachelor’s Degree in Graphic Design</p>
  <p>Greater Los Angeles Area.</p>


  <p>Originally a graphic designer with a Bachelor’s Degree in 2005, starting out as a Flash animator, which led to Actionscript development projects, and eventually a full time Actionscript, Flash and AIR development career. Due to the similarities between AS and Javascript, I was able to transition smoothly to HTML5 as it became the industry standard. UC Berkeley certified full-stack developer as of 2021. </p>
   </div>
  </section>
  
  );
}

export default About;
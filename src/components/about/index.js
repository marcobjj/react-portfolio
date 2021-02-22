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


  <p>I started out as Adobe Flash and Actionscript developer, which I did for 6 years. Due to the similarities between Actionscript and Javascript I was able to transition to Javascript based development quickly. I'm generalist (Full stack) developer and work both front-end / UX development, but have participated in and enjoy backend dev work just as much. </p>
   </div>
  </section>
  
  );
}

export default About;
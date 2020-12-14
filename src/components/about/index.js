import React from 'react';


function About() {
  return (
    <section className="my-5">
      <div className="about">
    <h1 id="about">Who am I?</h1>
    
     <img src={require(`../../assets/images/self.jpg`).default} className="my-2" width="574" height="360" alt="cover" />
  <p> Brazilian born and raised, currently living in Los Angeles. <br></br>I am a Graphic Design graduate for UFSC and currently a <br></br> UC Berkeley Coding Bootcamp student.</p>
   </div>
  </section>
  
  );
}

export default About;
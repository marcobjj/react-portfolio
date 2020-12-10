import React from 'react';


function About() {
  return (
    <section className="my-5">
    <h1 id="about">Who am I?</h1>
    {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
    Remember that we aren't just checking the browser every time we want to see something impressive—we're checking it for good reason. React automatically reloads the app every time we make a change, so it's always good to make sure we aren't getting any compile errors. If your screen is large enough, it might be worth putting your code and browser windows next to each other. If not, work on becoming comfortable with quickly switching between the browser and your IDE.
  </section>
  
  );
}

export default About;
import React, { useState } from 'react';
import Nav from "./components/nav";
import About from "./components/about";
import Header from "./components/header";
import Resume from "./components/resume"
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";



function App() {
  const [categories] = useState(["About","Resume","Portfolio","Contact"]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>

          {currentCategory === "Resume" &&  <Resume/>}
          {currentCategory === "Portfolio" &&  <Portfolio/>}
          {currentCategory === "About" &&  <About/>}
          {currentCategory === "Contact" &&  <Contact/>}

        </div>
      </main>
    </div>
  );
}

export default App;



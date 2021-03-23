import React, { useState } from 'react';
import Nav from "./components/nav";
import About from "./components/about";
import Header from "./components/header";
import Resume from "./components/resume"
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer"



function App() {
  const [categories] = useState(["About","Technical Skills","Portfolio","Contact"]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <div>

          {currentCategory === "Technical Skills" &&  <Resume/>}
          {currentCategory === "Portfolio" &&  <Portfolio/>}
          {currentCategory === "About" &&  <About/>}
          {currentCategory === "Contact" &&  <Contact/>}

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;



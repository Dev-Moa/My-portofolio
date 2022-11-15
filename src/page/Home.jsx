import React from "react";
import {
  Navbar,
  Hero,
  Who,
  Skills,
  Education,
  Projects,
  Contact,
} from "../components";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Who />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

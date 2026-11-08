import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import "./App.css";


function App() {
  // store the initial projects shown in the portfolio
  const [projects, setProjects] = useState([
  
    {
     id: 1,
      title: "Javascript",
    category: "Java",
     image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
  
    {
      id: 2,
       title: "Creative Website",
        category: "Web Design",
      image: "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
  ]);

  // store the text currently entered into the project search
  const [search, setSearch] = useState("");

  // add a newly submitted project to the existing project collection
  function addProject(newProject) {
    // append the new project and assign it a unique time-based identifier
    setProjects([...projects, {
      // copy the submitted project fields into the new collection entry
      ...newProject,
      // use the current timestamp as the new project's identifier
      id: Date.now()
      
    }]);
   
  }

  // keep projects whose title or category contains the search text
  const filteredProjects = projects.filter((project) =>
    // match the search text against the title without case sensitivity
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    // also match the search text against the category without case sensitivity
    project.category.toLowerCase().includes(search.toLowerCase())
  
  );

  // render the complete portfolio page
  return (
    <div>
      {/* wrap all page sections in the root container */}
      {/* render the main site navigation */}
      <Navbar />
      {/* render the introductory hero section */}
      <Hero />

     
      <main>
        {/* provide the form that adds projects to the application state */}
        <AddProject onAddProject={addProject} />

        {/* connect the search input to the current query state */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* display only projects that match the search query */}
        <ProjectList projects={filteredProjects} />
        {/* close the main content area */}
      </main>
      {/* close the root page container */}
    </div>
  );

}


export default App;

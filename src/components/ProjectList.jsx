import ProjectCard from "./ProjectCard";

// define the project collection and receive its project entries
function ProjectList({ projects }) {
  // render each project or a message when the collection is empty
  return (
    <section id="projects">
      {/* provide an anchorable section for the project collection */}
      {/* choose between project cards and the empty-results message */}
      {projects.length > 0 ? (
        // create a card for every project in the supplied collection
        projects.map((project) => (
          // render one card and pass it the current project
          <ProjectCard key={project.id} project={project} />
         ))
       
      ) : (
        // show a helpful message when there are no matching projects
        <p>No projects found.</p>
        
      )}
</section>
  
  );
 
}


export default ProjectList;

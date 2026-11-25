import ProjectCard from "./ProjectCard";

// define the project collection and receive its project entries
function ProjectList({ projects }) {
  // render each project or a message when the collection is empty
  return (
    <section id="projects" className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-start-2 md:row-start-2">
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
        <p className="col-span-full rounded-md border border-gray-200 p-6 text-center text-gray-600">No projects found.</p>
        
      )}
</section>
  
  );
 
}


export default ProjectList;

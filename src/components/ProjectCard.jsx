function ProjectCard({ project }) {
  // render the project preview using the supplied project data
  return (
    <div className="project-card">
      {/* wrap the image and project details in a styled card */}
      {/* show the project's image with its title as alternative text */}
      <img src={project.image} alt={project.title} />

      {/* group the project's title and category labels */}
      <div>
        {/* display the project's title */}
        <h3>{project.title}</h3>
        {/* display the project's category */}
        <p>{project.category}</p>
        {/* close the project-details group */}
      </div>
      
    </div>
  );


}


export default ProjectCard;

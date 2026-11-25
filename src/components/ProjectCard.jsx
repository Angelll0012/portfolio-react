function ProjectCard({ project }) {
  // render the project preview using the supplied project data
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* wrap the image and project details in a styled card */}
      {/* show the project's image with its title as alternative text */}
      <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />

      {/* group the project's title and category labels */}
      <div className="p-4">
        {/* display the project's title */}
        <h3 className="font-semibold">{project.title}</h3>
        {/* display the project's category */}
        <p className="mt-2 text-sm text-violet-700">{project.category}</p>
        {/* close the project-details group */}
      </div>
      
    </div>
  );


}


export default ProjectCard;

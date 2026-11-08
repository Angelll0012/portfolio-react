import { useState } from "react";

// define the project form and accept the parent submission callback
function AddProject({ onAddProject }) {

  // store the title currently entered into the form
  const [title, setTitle] = useState("");
  // store the category currently entered into the form
  const [category, setCategory] = useState("");
  // store the image URL currently entered into the form
  const [image, setImage] = useState("");

  // validate and submit the values when the form is submitted
  function handleSubmit(event) {
    // prevent the browser from navigating away on form submission
    event.preventDefault();

    // require a title, category, and image URL before adding a project
    if (!title || !category || !image) {
      // tell the user that all fields must be completed
      alert("Please fill in all fields");
      // stop submission while one or more fields are missing
      return;
   
    }

    // pass the completed project details to the parent component
    onAddProject({
      title,
      category,
      image
     
    });

    // clear the title field 
    setTitle("");
    // clear the category field 
    setCategory("");
    // clear the image URL field
    setImage("");
   
  }

  // render the form and its three controlled inputs
  return (
    <section id="add-project" >
      {/* provide an anchorable section for adding a project */}

      {/* introduce the project submission form */}
      <h2>Add a New Project</h2>

      {/* submit the entered values through the form handler */}
      <form onSubmit={handleSubmit}>

        {/* render the controlled project-title input */}
        <input type="text" placeholder="Project title" value={title} onChange={(event) => setTitle(event.target.value)} />

        {/* render the controlled project-category input */}
        <input type="text" placeholder="Project category" value={category} onChange={(event) => setCategory(event.target.value)} />

        {/* render the controlled project-image URL input */}
        <input type="url" placeholder="Project image URL" value={image} onChange={(event) => setImage(event.target.value)} />

        <button type="submit">Add Project</button>

      
      </form>

    </section>
  );
 
}


export default AddProject;

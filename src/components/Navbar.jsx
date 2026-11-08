function Navbar() {
    // render the portfolio brand and the section links
    return (
        <nav>
            <h2>My Portfolio </h2>
            {/* group the links to the main portfolio sections */}
            <div>
                {/* navigate to the page's introductory section */}
                <a href="#home">Home</a>
                {/* navigate to the project collection */}
                <a href="#projects">Projects</a>
                {/* navigate to the project creation form */}
                <a href="#add-projects">Add projects</a>
               
            </div>
           
        </nav>

    );
   
}


export default Navbar;
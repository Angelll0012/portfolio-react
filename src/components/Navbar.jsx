function Navbar() {
    // render the portfolio brand and the section links
    return (
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold">My Portfolio</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <a className="hover:text-violet-700" href="#home">Home</a>
                <a className="hover:text-violet-700" href="#projects">Projects</a>
                <a className="hover:text-violet-700" href="#add-project">Add projects</a>
            </div>
        </nav>
    );
}


export default Navbar;
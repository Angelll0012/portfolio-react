// define the portfolio's introductory hero component
function Hero() {
    // render the hero copy and project navigation link
    return (
        <section id="home" className="bg-violet-50 px-4 py-16 text-center sm:py-20">
            <p className="font-semibold text-violet-700">Welcome to my personal portfolio</p>
            <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                We bring ideas to life through design
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Explore our collection of creative project and discover what we can create together.
            </p>
            <a className="mt-6 inline-block rounded-md bg-violet-700 px-5 py-3 font-semibold text-white hover:bg-violet-800" href="#projects">
                Explore Projects
            </a>
        </section>
    );
}

export default Hero;
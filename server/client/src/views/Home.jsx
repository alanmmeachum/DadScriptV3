const Home = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center px-6 py-32 text-center relative min-h-screen sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          DadScript the Blog
        </h1>
        <p className="mt-4 sm:text-xl text-zinc-400 italics">
          Documenting my journey as I navigate through software development at the age of 28.
        </p>
        <a href="/blogs" className="mt-8 sm:text-4xl button-87">
          Check out the Blog!
        </a>
      </div>
    </div>
  );
};

export default Home;

const Home = () => {
  return (
    <div>
      <div className="gradient_background mx-auto flex flex-col items-center px-6 py-32 text-center relative min-h-screen sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          DadScript the Blog
        </h1>
        <p className="mt-4 sm:text-xl text-white">
          Sharing my journey navigating through software development at 28 years
          old.
        </p>
        <a href="/blogs" className="mt-8 sm:text-4xl button-87">
          Check out the Blog!
        </a>
      </div>
    </div>
  );
};

export default Home;

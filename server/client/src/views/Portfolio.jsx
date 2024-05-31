const Portfolio = () => {
  const stats = [
    { label: "Founded", value: "2021" },
    { label: "Employees", value: "37" },
    { label: "Countries", value: "12" },
    { label: "Raised", value: "$25M" },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <video className="blog_video" autoPlay loop src="/dadscriptblog.mov" />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 alan_font_color">Featured project</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">DadScript: The Blog</h1>
              <div className="max-w-xl">
                <p className="mt-6 text-white">
                DadScript.com is a personal blog meticulously designed and developed to document my journey as a software developer. It features insightful articles, comprehensive tutorials, and showcases of my projects. The blog is built using a robust tech stack, including React, JavaScript, MongoDB, CSS, Tailwind CSS, and Render services. 
                </p>
                <a className="text-indigo-200 hover:text-indigo-100" href="https://github.com/alanmmeachum/DadScriptV3">
                  <span className="sr-only">GitHub</span>
                  <svg className=" pt-1 h-10 w-8 alan_font_color" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

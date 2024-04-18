import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const [featuredPost, setFeaturedPost] = useState({});
  const { http } = props;
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    http
      .get("/blogs/662079a7d5a0ac45f25f052d")
      .then((res) => {
        console.log(res.data);
        setFeaturedPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ⬇️ Dummy Featured Post ⬇️
  // const featuredPost = {
  //   id: 1,
  //   title:
  //     "We’re incredibly proud to announce we have secured $75m in Series B",
  //   href: "#",
  //   description:
  //     "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
  //   date: "Mar 16, 2020",
  //   datetime: "2020-03-16",
  //   author: {
  //     name: "Michael Foster",
  //     href: "#",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   },
  // };
  // ⬆️ Dummy Featured Post ⬆️

  useEffect(() => {
    http
      .get("/blogs")
      .then((res) => {
        console.log(res.data);
        setAllBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const calcReadTime = (words) => {
    const calculation = words / 100;
    return calculation;
  };

  return (
    <div className="pb-10">
      <div className="relative isolate overflow-hidden pt-40 pb-16 sm:pt-60">
        <img
          src="/src/assets/keyboard2.png"
          alt=""
          className="absolute inset-0 -z-10 object-cover"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className=""
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className=""
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-6xl font-bold tracking-tight alan_font_color">
              Blog
            </h2>
            <p className="mt-6 text-m leading-8 text-white italics"></p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 pt-14 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <time className="block text-sm leading-6 text-white">
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-white">
            {featuredPost.description}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <Link to={`/blogs/662079a7d5a0ac45f25f052d`}>
                <a
                  className="text-sm font-semibold leading-6 alan_font_color"
                  aria-describedby="featured-post"
                >
                  Continue reading <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
            <div className="flex lg:border-t lg:border-gray-100/10 pb-10 lg:pt-8">
              {/* <a
                href={featuredPost.author}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
                >
                <img
                src={null}
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                {featuredPost.author}
              </a> */}
            </div>
          </div>
          <iframe
            className="linkedin_frame"
            src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25399375"
            width="100%"
            height="100%"
          ></iframe>
        </article>
        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-100/10">
            {allBlogs.map((blog) => (
              <article key={blog._id} className="py-12">
                <div className="group relative max-w-xl">
                  <h1 className="block text-sm leading-6 text-white">
                    {blog.date}
                  </h1>
                  <h2 className="mt-2 text-lg font-semibold alan_font_color group-hover:text-white">
                    <Link to={`/blogs/${blog._id}`}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white">
                    {blog.description}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-400 italic">
                    {" "}
                    Read time: {calcReadTime(blog.readTime)} minutes
                  </p>
                </div>

                {/* ⬇️ Author Image and name section ⬇️ */}
                {/* <div className="mt-4 flex">
                  <a
                    href={null}
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-white"
                    >
                    <img
                    src={null}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    />
                    </a>
                  </div> */}

                {/* ⬆️ Author Image and name section ⬆️ */}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

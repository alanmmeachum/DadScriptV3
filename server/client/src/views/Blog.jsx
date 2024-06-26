import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = (props) => {
  const { http, allBlogs, setAllBlogs } = props;

  useEffect(() => {
    http
      .get("/blogs")
      .then((res) => {
        setAllBlogs(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const calcReadTime = (words) => {
    const calculation = words / 100;
    return calculation;
  };
  return (
    <div className="">
    <div className="relative isolate overflow-hidden pt-40 sm:pt-60 ">
        <img
          src="/keyboard2.jpg"
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
        </div>
<div className="relative px-6 pb-20 lg:px-8 lg:pb-28 lg:pt-10">
      <div className="relative mx-auto max-w-7xl">
          <h2 className="text-3xl text-center font-bold tracking-tight alan_font_color sm:text-5xl">THE BLOG</h2>
          <p className="mt-6 text-m text-center leading-8 text-white italics">
              "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it."
            </p>
            <p className="mt-6 text-base text-center leading-8 text-white italics">
              - Greg Anderson
            </p>
        <div className="mx-auto grid max-w-2xl border-t border-gray-500 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"/>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {allBlogs.map((post) => (
            <Link to={`/blogs/${post._id}`}>
            <div key={post.title} className="flex flex-col overflow-hidden blog_box_style">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src="/blog.png" alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium alan_font_color">
                    <a className="hover:underline">
                      {post.name}
                    </a>
                  </p>
                  <a  className="mt-2 block">
                    <p className="text-xl font-semibold alan_font_color">{post.title}</p>
                    <p className="mt-3 text-base text-white">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a >
                      <span className="sr-only">{post.author}</span>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      <a className="hover:underline">
                        {post.author}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{calcReadTime(post.readTime)} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;

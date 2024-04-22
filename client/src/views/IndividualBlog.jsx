import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";

const IndividualBlog = (props) => {
  const { http } = props;
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    http
      .get(`/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentBlog(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pb-10">
      <div className="relative isolate overflow-hidden  sm:pt-20">
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
            <h2 className="text-5xl font-bold tracking-tight alan_font_color">
              {currentBlog.title}
            </h2>
          </div>
        </div>
        <div className="px-6 py-10 lg:px-8">
          <div className=" mx-auto max-w-3xl text-base leading-7 text-white ">
            {parse("" + currentBlog.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;

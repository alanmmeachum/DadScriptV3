import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = (props) => {
  const { http } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    content: "",
    readTime: 0,
    description: "",
    author: "",
    date: "",
  });

  useEffect(() => {
    http
      .get(`/blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentBlog({
          title: res.data.title,
          content: res.data.content,
          readTime: res.data.readTime,
          description: res.data.description,
          author: res.data.author,
          date: res.data.date,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onChangeHandler = (e) => {
    setCurrentBlog({
      ...currentBlog,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    http
      .patch(`/blogs/${id}`, currentBlog)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="mx-80" onSubmit={onSubmitHandler}>
      <div className="space-y-12 content-center ">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-white mt-10">
            Update The Blog
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-white"
              >
                Title:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                  <input
                    type="text"
                    name="title"
                    value={currentBlog.title}
                    id="title"
                    autoComplete="title"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-white"
              >
                Content:
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={5}
                  value={currentBlog.content}
                  className="block w-8/12 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="readtime"
                className="block text-sm font-medium leading-6 text-white"
              >
                Read Time:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                  <input
                    type="number"
                    name="readtime"
                    value={currentBlog.readTime}
                    id="readtime"
                    autoComplete="readtime"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-white"
              >
                Description:
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={currentBlog.description}
                  rows={5}
                  className="block w-8/12 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-white"
              >
                Author:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                  <input
                    type="text"
                    name="author"
                    value={currentBlog.author}
                    id="author"
                    autoComplete="author"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button-5">Update</button>
        </div>
      </div>
    </form>
  );
};

export default Details;

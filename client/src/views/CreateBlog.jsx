import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = (props) => {
  const { http, allBlogs, setAllBlogs } = props;
  const navigate = useNavigate()
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    readTime: 0,
    description: "",
    author: "",
  });

  const onChangeHandler = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    http
        .post('/blogs', newBlog)
        .then((res) => {
            setAllBlogs([...allBlogs, res.data])
            console.log(res.data)
            setNewBlog({
                title: "",
                content: "",
                readTime: 0,
                description: "",
                author: "",
            })
            .catch((err) => {
                console.log(err)
            })
        })
        navigate('/blogs')
  }



  return (
    <form className="mx-80" onSubmit={onSubmitHandler}>
      <div className="space-y-12 content-center ">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-white mt-10">
            Create A Blog
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
                    id="title"
                    autoComplete="title"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={newBlog.title}
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
                  className="block w-8/12 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={onChangeHandler}
                  value={newBlog.content}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="readtime"
                className="block text-sm font-medium leading-6 text-white"
              >
                Word Count:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500">
                  <input
                    type="number"
                    name="readTime"
                    id="readtime"
                    autoComplete="readtime"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={newBlog.readTime}
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
                  rows={5}
                  className="block w-8/12 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={onChangeHandler}
                  value={newBlog.description}
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
                    id="author"
                    autoComplete="author"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                    value={newBlog.author}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button-5 mt-3">Create Blog</button>
        </div>
      </div>
    </form>
  );
};

export default CreateBlog;

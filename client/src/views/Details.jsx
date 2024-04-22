import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { http } = props;
  const { id } = useParams();

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
        [e.target.name]: e.target.value
    })
  }

  return (
        <>
        {currentBlog.title}
        {currentBlog.content}
        </>
  );
};

export default Details;

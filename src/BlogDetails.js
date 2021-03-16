import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `${process.env.REACT_APP_URL}/${id}`
  );
  const history = useHistory();

  const deleteBlog = () => {
    fetch(`${process.env.REACT_APP_URL}/${data.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>...is Loading</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <p>Written By {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
};

export default BlogDetails;

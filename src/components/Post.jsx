import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";
import { useContext } from "react"; 

const Post = ({ post }) => {
const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" >
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}><TiDelete />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => (
          <span  key={tag} className="badge rounded-pill text-bg-primary hashtag">{tag}</span>))}
        <div   className="alert alert-warning reactions" role="alert">
          This Post is Reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
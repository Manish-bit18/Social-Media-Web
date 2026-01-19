import{ useRef, useContext, use} from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
 const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const titleElement  = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const posttitle = titleElement.current.value;
    const postcontent = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(',').map(tag => tag.trim());

    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    addPost(userId, posttitle, postcontent, reactions, tags);
  }

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="text" className="form-control" id="userId" placeholder="Enter User ID" ref={userIdElement}></input>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" className="form-control" id="title" placeholder="How are Feeling today" ref={titleElement}></input>
        
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Post Content</label>
        <textarea className="form-control" id="content" rows="3" placeholder="What's on your mind?" ref={contentElement}></textarea>
      </div>

        <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="reactions" placeholder="How are Feeling today" ref={reactionsElement}></input>
      </div>

       <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" placeholder="Enter tags separated by commas" ref={tagsElement}></input>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Post</button>
    </form>
  );
}
export default CreatePost;
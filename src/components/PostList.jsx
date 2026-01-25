import WelcomeMessage from "./WelcomeMessage.jsx"; ``
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListdata } from "../store/post-list-store.jsx";

const PostList = () => {

  const { postList } = useContext(PostListdata);
  const handleGetPostsClick = () => {
   fetch('https://dummyjson.com/posts')
   .then(res => res.json())
   .then(console.log);
  }
  return (
    <>
      {postList.length === 0 && 
      <WelcomeMessage ongetpostClick={handleGetPostsClick}></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}
export default PostList;
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addIntialPost: () => {},
  deletePost: () => {}
});


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
    newPostList =  currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

  else if (action.type === "ADD_POST") {
    newPostList = [action.payload , ...currPostList];
   
} else if (action.type === "ADD_INITIAL_POST") {
    newPostList = [...action.payload.posts , ...currPostList];
return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, posttitle, postcontent, reactions, tags) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title: posttitle,
        content: postcontent,
        reactions,
        tags
      }
    });
  };

  
  const addIntialPost = (posts) => {
    dispatchpostList({
      type: "ADD_INITIAL_POST",
      payload: {
       posts
      }
    });
  };

  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: { postId }
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addIntialPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

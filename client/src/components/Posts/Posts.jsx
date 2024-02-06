import Post from "./Post/Post"
import './Posts.css';
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../reducers/posts";

const Posts = () => {
  const posts = useSelector(selectAllPosts)

  console.log(posts)
  return (
    <>
        <div style={{
            marginBottom:'30px'
        }}>Posts</div>
        <Post />
        <Post />
    </>
    
  )
}

export default Posts
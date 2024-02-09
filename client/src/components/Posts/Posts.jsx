/* eslint-disable react/prop-types */
import Post from "./Post/Post"
import './Posts.css';
import { useSelector } from "react-redux";
import { Grid, CircularProgress} from "@material-ui/core";

const Posts = ({  open, setOpen }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
        {!posts.length ? <CircularProgress /> : (
          <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post._id}>
                <Post post={post} open={open} setOpen={setOpen}/>
              </Grid>
            ))}
          </Grid>
        )}
    </>
    
  )
}

export default Posts
/* eslint-disable react/prop-types */
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from "../../../actions/posts";
import { Link } from "react-router-dom";

const Post = ({ post, setOpen }) => {
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Card style={{
      position:'relative',
      padding:'10px',
      borderRadius:'15px'
    }}>
      <CardMedia component="img" height="200" image={post.selectedFile} title={post.title} alt="Image Title" sx={{
          objectFit: 'cover',
        }} style={{
          borderRadius:'17px',
          textAlign:'center',
          lineHeight:'200px',
        }}/>
      {post.selectedFile ? (<div style={{
        position:'absolute',
        top:'15px',
        left:'20px',
        color:'white'
      }}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>) : 
      <div style={{
        position:'absolute',
        top:'15px',
        left:'20px',
        color:'black'
      }}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>}
          <Link to={`/${post._id}`}>
            <div>
                <Button style={{color: 'white', position:'absolute', top:'10px',right:'10px'}} size="small" onClick={handleClickOpen}>
                  {post.selectedFile ? (<MoreHorizIcon fontSize="medium" />) : (<MoreHorizIcon fontSize="medium" color="primary"/>)}
                </Button>
            </div>
          </Link>
      <div style={{marginTop:'10px'}}>
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
      </div>
      <CardContent>
        <Typography variant="h4" color="textSecondary" gutterBottom style={{color:'black'}}>{post.title}</Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions style={{
        display:'flex',
        justifyContent:'space-between'
      }}>
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
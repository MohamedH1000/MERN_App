/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, createPost } from "../../actions/posts";
import Dialog from '@mui/material/Dialog';
import './Form.css';
import {useParams, useNavigate} from 'react-router-dom';

const Form = ({  open, setOpen }) => {
  const navigate = useNavigate();
  const { currentId } = useParams();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const canSave = [postData.title && postData.message && postData.creator].every(Boolean);
  useEffect(() => {
    if(post) setPostData(post)
  }, [post])
  const handleSubmit = (e) => {
      e.preventDefault();
      if (currentId) {
        dispatch(updatePost(currentId, postData))
        console.log('the updated post',postData)
      } else {
        dispatch(createPost(postData))
      }
      clear();
      navigate('/')
  }

  const clear = () => {
      setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
  }
  const handleClickOpen = () => {
    setOpen(true);
    navigate('/');
    clear();
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <TextField variant="outlined" onClick={handleClickOpen} fullWidth placeholder="Create New Post ..." className="placeholder"/>
      <Dialog 
          open={open}
          onClose={handleClose}
          PaperProps={{
            onSubmit: () => {
              handleClose();
            },
          }}
      >
        <Paper style={{
          padding:'10px'
        }}>
          <form autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
                >
                  <Typography variant="h5" style={{fontWeight:'bold',height:'50px', textAlign:'center'}}>{currentId ? "Editing" : "Creating"} a Post</Typography>
                  <TextField
                      name="creator"
                      variant="outlined"
                      label="Creator"
                      fullWidth
                      value={postData.creator}
                      onChange={(e) => setPostData({ ...postData, creator:e.target.value })}
                      style={{
                        margin:'10px 0 10px 0'
                      }}
                      />
                  <TextField
                      name="title"
                      variant="outlined"
                      label="Title"
                      fullWidth
                      value={postData.title}
                      onChange={(e) => setPostData({ ...postData, title:e.target.value })}
                      style={{
                        margin:'10px 0 10px 0'
                      }}
                      />
                  <TextField
                      name="message"
                      variant="outlined"
                      label="Message"
                      fullWidth
                      value={postData.message}
                      onChange={(e) => setPostData({ ...postData, message:e.target.value })}
                      style={{
                        margin:'10px 0 10px 0'
                      }}
                      />
                  <TextField
                      name="tags"
                      variant="outlined"
                      label="Tags"
                      fullWidth
                      value={postData.tags}
                      onChange={(e) => setPostData({ ...postData, tags:e.target.value })}
                      style={{
                        margin:'10px 0 10px 0'
                      }}
                      />
                  <div style={{
                        margin:'10px 0 10px 0'
                      }}>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                  </div>
                  <Button variant="contained" color="primary" size="large" type="submit" fullWidth style={{marginBottom:'10px'}} disabled={!canSave}>Submit {currentId ? "Editing" : null }</Button>
                  <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
      </Dialog>
    </>
    
  )
}

export default Form
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SignpostIcon from '@mui/icons-material/Signpost';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import './App.css';
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
      <Container maxWidth="lg" style={{
        fontFamily:'Georgia',
        }}>
        <AppBar position="static" color="inherit" style={{
          height:'100px',
          borderRadius:'10px'
      }}>
          <Typography variant="h2" align="center" style={{
            position:'relative',
            top:'10px',
            color:'rgb(92, 92, 179)'
          }}>Pasta Post</Typography>
          <SignpostIcon className="icon" style={{
            fontSize:'50px'
          }}/>
        </AppBar>
        <Grow in>
          <Container style={{
            marginTop:'30px'
          }}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <Grid item xs={12} sm={4} style={{marginBottom:'20px'}}>
                <Form  open={open} setOpen={setOpen} />
              </Grid>
            </div>
            <Grid container direction="row" alignItems="stretch" spacing={3} >
              <Grid item xs={12} className="posts-structure">
                <Posts open={open} setOpen={setOpen}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>   
  )
}

export default App
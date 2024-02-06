import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SignpostIcon from '@mui/icons-material/Signpost';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import './App.css';

const App = () => {

  return (
      <Container maxWidth="lg" style={{
        fontFamily:'Georgia',
        }}>
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center" style={{
            position:'relative',
            top:'10px'
          }}>Pasta Post</Typography>
          <SignpostIcon className="icon" style={{
            fontSize:'50px'
          }}/>
        </AppBar>
        <Grow in>
          <Container style={{
            marginTop:'50px'
          }}>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className="posts-structure">
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>   
  )
}

export default App
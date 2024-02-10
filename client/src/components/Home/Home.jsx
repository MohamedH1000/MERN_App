import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";
import { Container, Grow, Grid } from "@material-ui/core";

const Home = ({open, setOpen}) => {
  return (
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
  )
}

export default Home
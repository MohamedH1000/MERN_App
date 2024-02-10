import {  AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import SignpostIcon from '@mui/icons-material/Signpost';
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = null;
  return (
    <AppBar position="static" color="inherit" style={{
        height:'100px',
        borderRadius:'10px',
        position:'relative',
        marginBottom:'20px'
    }}>
        <Typography variant="h2" align="center" style={{
          position:'relative',
          top:'10px',
          color:'rgb(92, 92, 179)',
          textDecoration:'none'
        }} component={Link} to='/'>Pasta Post</Typography>
        <SignpostIcon className="icon" style={{
          fontSize:'50px'
        }}/>
        <Toolbar style={{position:'absolute', top:'20px', right:'0'}}>
          {user? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button variant="contained" color="secondary">Logout</Button>
            </div>
          ) : (
            <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
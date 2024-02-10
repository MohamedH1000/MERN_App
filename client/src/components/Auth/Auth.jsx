import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Container, Paper, Avatar, Typography, Grid, Button} from "@material-ui/core";
import Input from "./input";
import { useState } from "react";

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false)

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const switchSign = () => {
        setIsSignUp((prev) => !prev)
        setShowPassword(false)
    }

  return (
        <Container maxWidth="xs" component="main">
            <Paper elevation={3} style={{padding:'20px', position:'relative'}}>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <Avatar >
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5" style={{margin:"10px"}}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Typography>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{margin:'20px 0'}}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-start">
                        <Grid item>
                            <Button onClick={switchSign}>
                                {isSignup ? 'Already have an account ? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
  )
}

export default Auth
import { Container } from "@material-ui/core";
import './App.css';
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth";

const App = () => {
  const [open, setOpen] = useState(false);

  return ( 
          <Container maxWidth="lg" style={{
            fontFamily:'Georgia',
            }}>
            <NavBar />
            <Routes>
              <Route path='/' exact element={<Home open={open} setOpen={setOpen}/>} />
              <Route path='/auth' exact element={<Auth />} />
              <Route path='/:currentId' exact element={<Home open={open} setOpen={setOpen}/>} />
            </Routes>
          </Container>
  )
}

export default App
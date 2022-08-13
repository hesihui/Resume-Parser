import { Container, AppBar, Typography, Grid, Grow, TextField } from '@mui/material';
import Posts from './components/Posts/Posts';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from './components/Form';
import './App.css';
import { margin } from '@mui/system';


function App() {


  return (
      <Router>

          <AppBar style={{ background: '#01579B' }}
              margin='30px 0'
              display='flex'
              flexDirection='row'
              justifyContent='center'
              alignItems='center'
              position="relative"
              color="inherit"
          >
            <Grid container spacing={3}>
            <Link to="/">
              <Typography sx={{
                  
                  color: 'white',
                  marginTop: '30px',
                  marginLeft: '180px'
                  

              }} variant="h2" > RParser </Typography>
            </Link>
            <Link style={{ 
                fontSize: '30px',
                color: 'white',
                marginTop: '60px',
                marginLeft: '800px',
                

                
            }} to="/form"> Fill the Form </Link>
            </Grid>
          </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </Router>

  );
}


export default App;
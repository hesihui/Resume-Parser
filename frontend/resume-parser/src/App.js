import { Container, AppBar, Typography, Grid, Grow, TextField } from '@mui/material';
import Posts from './components/Posts/Posts';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from './components/Form';

function App() {


  return (
      <Router>
        <Container>
          <AppBar
              margin='30px 0'
              display='flex'
              flexDirection='row'
              justifyContent='center'
              alignItems='center'
              position="relative"
              color="inherit"
          >
            <Link to="/">
              <Typography color='rgba(0,183,255, 1)' variant="h2" > RParser </Typography>
            </Link>
            <Link to="/form"> Fill the Form </Link>
          </AppBar>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </Router>

  );
}


export default App;
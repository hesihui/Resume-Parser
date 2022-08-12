import { Container, AppBar, Typography, Grid, Grow, TextField } from '@mui/material';

import Posts from './components/Posts/Posts';


function App() {


  return (



    <Container maxWidth="lg">
    <AppBar 
        
        margin='30px 0'
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        position="relative" 
        color="inherit"
        
      >
      <Typography color='rgba(0,183,255, 1)' variant="h2" >RParser</Typography>

    </AppBar>


    
    <form noValidate autoComplete="off">
            <TextField
                label="Search for resume using name, keywords, postion, experience, etc."
                variant="outlined"
                color='secondary'
                margin='normal'
                

            />
      </form>

    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}


export default App;
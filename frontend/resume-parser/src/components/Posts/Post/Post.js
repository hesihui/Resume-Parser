import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Post = ({ post, setCurrentId }) => {

  return (
    <Card 
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        borderRadius='15px'
        height='100%'
        position='relative'
    >
      <CardMedia 
        height='0'
        paddingTop='56.25%'
        backgroundColor='rgba(0, 0, 0, 0.5)'
        backgroundBlendMode='darken'
        /*image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} */
        title='candidate' />
      <div 
        position='absolute'
        top='20px'
        left='20px'
        color='white'
    >
        <Typography variant="h6">creator</Typography>
      </div>
      <div 
        position='absolute'
        top='20px'
        right='20px'
        color='white'
      >
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}></Button>
      </div>
      <div 
        display='flex'
        justifyContent='space-between'
        margin='20px'
      >
        <Typography variant="body2" color="textSecondary" component="h2"></Typography>
      </div>
      <Typography padding='0 16px' gutterBottom variant="h5" component="h2">Candidate</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">message</Typography>
      </CardContent>
      <CardActions 
        padding='0 16px 8px 16px'
        display='flex'
        justifyContent='space-between'
      >
        <Button size="small" color="primary" /*onClick={() => dispatch(likePost(post._id))}*/></Button>
        <Button size="small" color="primary" /*onClick={() => dispatch(deletePost(post._id))}*/> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
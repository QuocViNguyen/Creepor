import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';

function PostActionBar(props)
{


    return ( 
        <>
        <Grid container spacing={0}>    
            <Grid item xs={2} md={2}>
                <Button size="" 
                color="primary" 
                variant= {props.isLike ? "contained" : "outlined"}
                startIcon={<SentimentSatisfiedAltIcon/>} 
                onClick={props.like}>{props.likeCount}
                </Button>
            </Grid>
            <Grid item xs={2} md={2}>
                <Button size="" 
                color="primary" 
                variant= {props.isDislike ? "contained" : "outlined"}
                startIcon={<SentimentNeutralIcon/>} 
                onClick={props.dislike}>{props.dislikeCount}
                </Button>
            </Grid>
            <Grid item xs={2} md={2}>
                <Button size="" color="primary" variant="outlined" startIcon={<CommentIcon/>}>Comment</Button>
            </Grid>
            <Grid item xs={1} md={5} className='spacer' />
            <Grid item xs={2} md={1}>
                <Button size="" color="primary" variant="text" startIcon={<ShareIcon/>}></Button>
                {/* <Typography>ALOHA</Typography> */}
            </Grid>
        </Grid>
        </>
     );
}


export default PostActionBar;
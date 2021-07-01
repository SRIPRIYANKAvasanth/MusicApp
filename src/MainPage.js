import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  root1: {
    maxWidth: 350,
    height:50,
    backgroundColor:"#6c757d"
  },
  media: {
    height: 200,
  },
});


function MainPage(props) {
  const classes = useStyles();
  const songslist = props.listSongs

  const handleClick = () =>{
    props.songind(0)
  }

  return (
    <div  style={{paddingTop:"20px"}}>
    <Typography variant="h4" gutterBottom>
       This Weekend !
      </Typography>
      <Chip
      label="Play"
        icon={<PlayArrowIcon />}
        color="secondary"
        onClick={handleClick}
      />

      <div className="row">
{songslist.map((sng,ind)=>(
  <div className="col" style={{padding:"5px"}}>
  <CardActionArea>
 <Card className={classes.root}>
 
    <CardMedia
      className={classes.media}
      image={sng.composer}
    />
  </Card>
  <Typography  gutterBottom variant="h6" >
          {sng.name}
          </Typography> 
   </CardActionArea></div>

))} </div>
    <Typography variant="h6" gutterBottom>
       New Played !
      </Typography>
      {songslist.map((sng,ind)=>(
  <div  style={{padding:"5px"}}>
  
 <Card className={classes.root1}>
 <div className="row">
 <div className="col-md-2" >
             
              {props.songnum === ind && props.type === "play"? <PauseIcon /> : <PlayArrowIcon />}

 </div>
 <div className="col-md-3" >
   <div style={{paddingTop:"2px"}}>
 <Avatar alt="Remy Sharp" src={sng.composer} />
 </div></div>
 <div className="col-md-3" >
 <div style={{paddingTop:"4px"}}>
 <Typography variant="subtitle2" gutterBottom>
 {sng.name}
      </Typography>
 </div></div>
 <div className="col-md-2" ><IconButton aria-label="settings" >
              <MoreVertIcon />
            </IconButton>
 </div>
 </div>
  </Card>
  
  </div>

))}

    </div>
  );
}


export default MainPage;

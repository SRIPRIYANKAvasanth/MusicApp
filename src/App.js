import React, { useState } from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MainPage from './MainPage.js';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App(props) {
  const songs = props.songs.Songs
  const songcount = songs.length-1
  const [type,setType]=useState("")
  const [songInd, setSongind] = useState(0);
  var music = songs[songInd]
  console.log("dfd",music)
  const [visible, setVisible] = useState(true);

	const updateModal = (obj) => setVisible(obj);

  return (
    <div className="App" >
      <div className="App-header">
     <div class="container-fluid"style={{height:"100vh"}} >
    <div class="row flex-nowrap" style={{height:"89vh"}}>
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li >
                        
                            <span class="ms-1 d-none d-sm-inline">Browse</span>
                        
                        <ul  style={{listStyleType:"none"}} data-bs-parent="#menu">
                            <li class="w-100" style={{padding:"3px"}}>
                                <a > <span class="d-none d-sm-inline">Discover</span> </a>
                            </li>
                            <li style={{padding:"3px"}} >
                                <a > <span class="d-none d-sm-inline">Songs</span></a>
                            </li>
                            <li style={{padding:"3px"}} >
                                <a > <span class="d-none d-sm-inline">Top Charts</span></a>
                            </li>
                            <li style={{padding:"3px"}}>
                                <a > <span class="d-none d-sm-inline">Artists</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                       
                            <span class="ms-1 d-none d-sm-inline">Playlist</span> 
                        <ul style={{listStyleType:"none"}} data-bs-parent="#menu">
                            <li class="w-100" style={{padding:"3px"}}>
                            <i><FavoriteIcon /></i>    <a > <span class="d-none d-sm-inline">Favourite</span>  </a>
                            </li>
                            <li style={{padding:"3px"}}>
                            <i><AccessTimeIcon /></i>    <a > <span class="d-none d-sm-inline">Recent</span>  </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                       
                             <span class="ms-1 d-none d-sm-inline">My Music</span>
                            <ul style={{listStyleType:"none"}} data-bs-parent="#menu">
                            
                            {songs.map((sng,ind)=>(
  <li class="w-100" style={{padding:"3px"}}>
<i><LibraryMusicIcon /></i>  <a > <span class="d-none d-sm-inline">{sng.name}</span>  </a>
</li>))}
                        </ul>
                    </li> 
                   
                </ul>
            </div>
        </div>
        <div class="col py-3">
        <div class="container" style={{display:"block"}}>
      <div class="row ">
            
        <div class="col-md-10">
        
        </div>
        <div class="col-md-2"  >
            <div style={{float:"right"}} >
        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoIRnQmYFA2FH1daRYZEt7YtCJ4qVu0DLHA&usqp=CAU" />
        </div>
        </div>
        <MainPage listSongs={songs} type={type} songnum={songInd} songind={(obj)=>setSongind(obj)} />
        </div>
        </div>
        </div>
    </div>
    {console.log("test",songs)}
    <nav class="navbar navbar-light bg-dark" >
  <div class="container" style={{display:"block"}}>
      <div class="row ">
          <div class="col-md-3">
          
          <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={music.composer} />
        }
        action={
            <IconButton aria-label="settings" style={{color:"#ffffff"}}>
              <MoreVertIcon />
            </IconButton>
          }
        title={music.name}
      />
          </div>
          <div class="col-md-8">
         
          <AudioPlayer
          style={{backgroundColor:"#212529"}}
          showSkipControls={true} showJumpControls={false}
    autoPlay
    src={music.song}
    onPlay={e => setType(e.type)}
    onPause = {e => setType(e.type)} 
    onEnded={() => {songcount === songInd ? setSongind(0):setSongind(songInd => songInd + 1)}}
    onClickPrevious={()=>{songInd === 0 ? setSongind(0):setSongind(songInd => songInd - 1)}}
    onClickNext={()=>{songcount === songInd ? setSongind(0):setSongind(songInd => songInd + 1)}}
    layout="horizontal"
  />
          </div>
 
   </div>
  </div>
</nav> 
</div>
</div>          
    </div>
  );
}


export default App;

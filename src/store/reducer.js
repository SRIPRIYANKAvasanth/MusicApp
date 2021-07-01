const initialState = {
    Songs:[
      {"song":"https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg","composer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T6WtbxJJAXYnfwFsUl3yaklMfenTymF53Q&usqp=CAU",name:"John Toe"},
      {"song":"https://actions.google.com/sounds/v1/alarms/dosimeter_alarm.ogg","composer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QxlRoTZMiU1Vjuk0KCXl6pKxA6093KaAfA&usqp=CAU",name:"Jhongyuns"},
    {"song":"https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg","composer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP8Oq84ol1vNQtvBE1Orr3exNGkXF6lkpZA&usqp=CAU",name:"Justin bieber"},
  {"song":"https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg","composer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3eQT9-TO81NJjlHY132FWsL0fvAvdTNMlA&usqp=CAU",name:"Jerom"},
{"song":"https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg","composer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoIRnQmYFA2FH1daRYZEt7YtCJ4qVu0DLHA&usqp=CAU",name:"Sid Sriram"}]
 }

 const setReducer = (state= initialState , action)=>{
    console.log('state',state)
    switch (action.type){
    case "SONGSDATABASE":
     
        return {
            ...state,
            Songs:[...state.Songs,action.data]
         
               
          }
    
 
   
    
    default:
      return state;
    }
    }
    export default setReducer;
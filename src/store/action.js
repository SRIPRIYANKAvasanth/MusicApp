export  const songsDb = (data)=>{
    console.log('action data',data);
   return{
   type:"SONGSDATABASE",
   data:data
   }
   }
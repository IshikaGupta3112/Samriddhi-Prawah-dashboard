const initial={
    response2:''
 };
 
 const collectorReducer =(state=initial 
     , action)=>{
     switch(action.type){
         case "Collector" :{
         console.log(action.payload);
         if(action.payload.data){
            console.log(action.payload.data.msg);
        return{
            response2:action.payload.data.msg
        }
    }
    else{
    console.log(action.payload.response.data.msg);
   return { response2:action.payload.response.data.msg}
          }
        }
          default: return null;
     } 
  }
  export default collectorReducer;
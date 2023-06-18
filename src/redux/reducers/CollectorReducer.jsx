const initial={
    response2:'',
    users:'' ,
    topDonors:'',
    pages:''
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

        case "CollectorList" :{
            console.log(action.payload);
            console.log(action.payload.data.users);
            return {
               users:action.payload.data.users,
               pages:action.payload.data.pages
            }
         }
         case "DonorList" :{
            console.log(action.payload);
            console.log(action.payload.data.topDonors);
            return {
               topDonors:action.payload.data.topDonors
            }
         }
          default: return null;
     } 
  }
  export default collectorReducer;
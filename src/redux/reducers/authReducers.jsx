const initial={
   response1:'' , 
   isUser:false
};

const authreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Login" :{
        console.log(action.payload);
        if(action.payload.data){
            localStorage.setItem("access" , action.payload.data.accessToken);
            console.log(localStorage.getItem("access"));
           return{
            isUser:action.payload
           }
        }
       else return {
            response1:action.payload.response.data && action.payload.response.data.msg
        }
    }
       
         default: return null;
    } 
 }
 export default authreducer;
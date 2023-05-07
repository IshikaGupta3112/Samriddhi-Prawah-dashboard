const initial={
   items:''
 };
 
 const itemReducer =(state=initial 
     , action)=>{
     switch(action.type){
         case "Items" :{
         console.log(action.payload);
         console.log(action.payload.data.items);
         return {
            items:action.payload.data.items
         }
     }
     case "Approve" :{
        console.log(action.payload);
        return null
 }
        
          default: return null;
     } 
  }
  export default itemReducer;
const initial={
   items:'' , 
   pages:''
 };
 
 const itemReducer =(state=initial 
     , action)=>{
     switch(action.type){
         case "Items" :{
         console.log(action.payload);
         console.log(action.payload.data.items);
         return {
            items:action.payload.data.items,
            pages:action.payload.data.pages
         }
      }
         case "ApprovedItems" :{
            console.log(action.payload);
            console.log(action.payload.data.items);
            return {
               items:action.payload.data.items,
               pages:action.payload.data.pages
            }
         }

         case "RejectedItems" :{
            console.log(action.payload);
            console.log(action.payload.data.items);
            return {
               items:action.payload.data.items,
               pages:action.payload.data.pages
            }
         }
         case "DonatedItems" :{
            console.log(action.payload);
            console.log(action.payload.data.items);
            return {
               items:action.payload.data.items,
               pages:action.payload.data.pages
            }
         }
         case "CollectedItems" :{
            console.log(action.payload);
            console.log(action.payload.data.items);
            console.log(action.payload.data.pages);
            return {
               items:action.payload.data.items , 
               pages:action.payload.data.pages
            }
            
         }
     case "Approve" :{
        console.log(action.payload);
        return null
 }
 case "CollectItem" :{
   console.log(action.payload);
   return null
}
 case "Reject" :{
   console.log(action.payload);
   return null
}
case "Donated" :{
   console.log(action.payload);
   return null
}
        
          default: return null;
     } 
  }
  export default itemReducer;
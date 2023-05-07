import axios from 'axios';
import api from '../base.jsx';

export const itemData =(setLoading ,setCheck) =>
async (dispatch)=>{
    var accesstoken =localStorage.getItem("access")
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.get("http://34.228.115.7:8080/api/admin/items" , config)
      .then((res)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'Items' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'Items' ,
              payload :err}
          )
      })
  }

  export const approveData =(fd) =>
async (dispatch)=>{
    var productId2 =localStorage.getItem("productId2");
    var accesstoken =localStorage.getItem("access");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.patch("http://34.228.115.7:8080/api/admin/status/:"+productId2 , config)
      .then((res)=>{
        // setCheck2(1);
        //   setLoading(false);
          dispatch(
              {type:'Approve' ,
              payload :res}
              )
          })
      .catch((err)=>{
        // setCheck2(1);
        //   setLoading(false);
          dispatch(
              {type:'Approve' ,
              payload :err}
          )
      })
  }
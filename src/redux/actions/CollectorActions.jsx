import axios from 'axios';
import api from '../base.jsx';

export const collectorData =(fd, setCheck , setLoading) =>
async (dispatch)=>{
    var accesstoken =localStorage.getItem("access")
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.post("http://34.228.115.7:8080/api/admin/togglecollector",fd , config)
      .then((res)=>{
        setCheck(1);
        setLoading(false);
          dispatch(
              {type:'Collector' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
        setLoading(false);
          dispatch(
              {type:'Collector' ,
              payload :err}
          )
      })
  }

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
    await axios.post("https://sampaw.devalan.tech/api/admin/togglecollector",fd , config)
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

  export const collectorList =(n,setCheck , setLoading) =>
async (dispatch)=>{
    var accesstoken =localStorage.getItem("access")
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.get("https://sampaw.devalan.tech/api/admin/users?role=COLLECTOR&page="+n+"&limit=10", config)
      .then((res)=>{
        setCheck(1);
        setLoading(false);
          dispatch(
              {type:'CollectorList' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
        setLoading(false);
          dispatch(
              {type:'CollectorList' ,
              payload :err}
          )
      })
  }

  export const donorList =( setLoading ,setCheck ) =>
  async (dispatch)=>{
      var accesstoken =localStorage.getItem("access")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
      await axios.get("https://sampaw.devalan.tech/api/admin/highestdonor", config)
        .then((res)=>{
          setCheck(1);
          setLoading(false);
            dispatch(
                {type:'DonorList' ,
                payload :res}
                )
            })
        .catch((err)=>{
          setCheck(1);
          setLoading(false);
            dispatch(
                {type:'DonorList' ,
                payload :err}
            )
        })
    }
  
  


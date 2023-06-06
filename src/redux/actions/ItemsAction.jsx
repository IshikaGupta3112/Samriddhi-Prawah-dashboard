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
    await axios.get("http://34.228.115.7:8080/api/admin/items?status=PENDING" , config)
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

  export const approvedItems =(setLoading ,setCheck) =>
async (dispatch)=>{
    var accesstoken =localStorage.getItem("access")
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.get("http://34.228.115.7:8080/api/admin/items?status=APPROVED" , config)
      .then((res)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'ApprovedItems' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'ApprovedItems' ,
              payload :err}
          )
      })
  }

  export const collectedItems =(setLoading ,setCheck) =>
  async (dispatch)=>{
      var accesstoken =localStorage.getItem("access")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
      await axios.get("http://34.228.115.7:8080/api/admin/items/collected" , config)
        .then((res)=>{
          setCheck(1);
            setLoading(false);
            dispatch(
                {type:'CollectedItems' ,
                payload :res}
                )
            })
        .catch((err)=>{
          setCheck(1);
            setLoading(false);
            dispatch(
                {type:'CollectedItems' ,
                payload :err}
            )
        })
    }

  export const rejectedItems =(setLoading ,setCheck) =>
  async (dispatch)=>{
      var accesstoken =localStorage.getItem("access")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
      await axios.get("http://34.228.115.7:8080/api/admin/items?status=REJECTED" , config)
        .then((res)=>{
          setCheck(1);
            setLoading(false);
            dispatch(
                {type:'RejectedItems' ,
                payload :res}
                )
            })
        .catch((err)=>{
          setCheck(1);
            setLoading(false);
            dispatch(
                {type:'RejectedItems' ,
                payload :err}
            )
        })
    }

  export const approveData =(fd , setCheck2 , setLoading) =>
async (dispatch)=>{
    var productId2 =localStorage.getItem("productId2");
    var accesstoken =localStorage.getItem("access");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.patch("http://34.228.115.7:8080/api/admin/status/"+productId2 ,fd, config)
      .then((res)=>{
        setCheck2(1);
          setLoading(false);
          dispatch(
              {type:'Approve' ,
              payload :res}
              )
          })
      .catch((err)=>{
        // setCheck2(1);
          setLoading(false);
          dispatch(
              {type:'Approve' ,
              payload :err}
          )
      })
  }
  
  export const collectItem =(fd , setCheck4 , setLoading) =>
  async (dispatch)=>{
      var productId2 =localStorage.getItem("productId2");
      var accesstoken =localStorage.getItem("access");
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
      await axios.patch("http://34.228.115.7:8080/api/admin/status/"+productId2 ,fd, config)
        .then((res)=>{
          setCheck4(1);
            setLoading(false);
            dispatch(
                {type:'CollectItem' ,
                payload :res}
                )
            })
        .catch((err)=>{
          // setCheck2(1);
            setLoading(false);
            dispatch(
                {type:'CollectItem' ,
                payload :err}
            )
        })
    }

  export const rejectData =(fd , setCheck3 , setLoading) =>
async (dispatch)=>{
    var productId2 =localStorage.getItem("productId2");
    var accesstoken =localStorage.getItem("access");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    await axios.patch("http://34.228.115.7:8080/api/admin/status/"+productId2 ,fd, config)
      .then((res)=>{
        setCheck3(1);
          setLoading(false);
          dispatch(
              {type:'Reject' ,
              payload :res}
              )
          })
      .catch((err)=>{
        // setCheck2(1);
          setLoading(false);
          dispatch(
              {type:'Reject',
              payload :err}
          )
      })
  }
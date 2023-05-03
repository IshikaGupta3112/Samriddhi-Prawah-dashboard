import axios from 'axios';
import api from '../base.jsx';

export const logindata =(logindata ,history , setCheck , setLoading) =>
async (dispatch)=>{
    await axios.post("http://34.228.115.7:8080/api/admin/login" , logindata)
      .then((res)=>{
        setCheck(1);
          setLoading(false);
          history.push("/admin/dashboard");
          dispatch(
              {type:'Login' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'Login' ,
              payload :err}
          )
      })
  }
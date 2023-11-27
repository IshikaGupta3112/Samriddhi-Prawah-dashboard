import axios from "axios";
import api from "../base.jsx";

export const collectorData = (fd, setCheck, setLoading) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .post("admin/togglecollector", fd, config)
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "Collector", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "Collector", payload: err });
    });
};

export const collectorList = (n, setCheck, setLoading) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/users?role=COLLECTOR&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "CollectorList", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "CollectorList", payload: err });
    });
};

export const donorList = (setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("admin/highestdonor", config)
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "DonorList", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "DonorList", payload: err });
    });
};

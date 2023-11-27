import axios from "axios";
import api from "../base.jsx";

export const itemData = (n, setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/items?status=PENDING&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "Items", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "Items", payload: err });
    });
};

export const approvedItems = (n, setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/items?status=APPROVED&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "ApprovedItems", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "ApprovedItems", payload: err });
    });
};

export const donatedItems = (n, setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/items?status=DONATED&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "DonatedItems", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "DonatedItems", payload: err });
    });
};

export const collectedItems = (n, setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/items/collected?type=AKG&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "CollectedItems", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "CollectedItems", payload: err });
    });
};

export const collectedHostelItems =
  (n, setLoading, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("access");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .get(
        "admin/items/collected?page=" +
          n +
          "&limit=10",
        config
      )
      .then((res) => {
        setCheck(1);
        setLoading(false);
        dispatch({ type: "CollectedItems", payload: res });
      })
      .catch((err) => {
        setCheck(1);
        setLoading(false);
        dispatch({ type: "CollectedItems", payload: err });
      });
  };

export const rejectedItems = (n, setLoading, setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get(
      "admin/items?status=REJECTED&page=" +
        n +
        "&limit=10",
      config
    )
    .then((res) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "RejectedItems", payload: res });
    })
    .catch((err) => {
      setCheck(1);
      setLoading(false);
      dispatch({ type: "RejectedItems", payload: err });
    });
};

export const approveData = (fd, setCheck2, setLoading) => async (dispatch) => {
  var productId2 = localStorage.getItem("productId2");
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .patch(
      "admin/status/" + productId2,
      fd,
      config
    )
    .then((res) => {
      setCheck2(1);
      setLoading(false);
      dispatch({ type: "Approve", payload: res });
    })
    .catch((err) => {
      // setCheck2(1);
      setLoading(false);
      dispatch({ type: "Approve", payload: err });
    });
};

export const collectItem = (fd, setCheck4, setLoading) => async (dispatch) => {
  var productId2 = localStorage.getItem("productId2");
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .patch(
      "admin/status/" + productId2,
      fd,
      config
    )
    .then((res) => {
      setCheck4(1);
      setLoading(false);
      dispatch({ type: "CollectItem", payload: res });
    })
    .catch((err) => {
      // setCheck2(1);
      setLoading(false);
      dispatch({ type: "CollectItem", payload: err });
    });
};

export const rejectData = (fd, setCheck3, setLoading) => async (dispatch) => {
  var productId2 = localStorage.getItem("productId2");
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .patch(
      "admin/status/" + productId2,
      fd,
      config
    )
    .then((res) => {
      setCheck3(1);
      setLoading(false);
      dispatch({ type: "Reject", payload: res });
    })
    .catch((err) => {
      // setCheck2(1);
      setLoading(false);
      dispatch({ type: "Reject", payload: err });
    });
};

export const donateData = (fd, setCheck4, setLoading) => async (dispatch) => {
  var productId2 = localStorage.getItem("productId2");
  var accesstoken = localStorage.getItem("access");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .patch(
      "admin/donate/" + productId2,
      fd,
      config
    )
    .then((res) => {
      setCheck4(1);
      setLoading(false);
      dispatch({ type: "Donated", payload: res });
    })
    .catch((err) => {
      // setCheck2(1);
      setLoading(false);
      dispatch({ type: "Donated", payload: err });
    });
};

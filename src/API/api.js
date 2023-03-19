import axios from "axios";


const instanceAPI = axios.create({
  baseURL: "https://api.wisey.app/api/v1",
});

const setToken = (token) => {
  if (token) {
    return (instanceAPI.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instanceAPI.defaults.headers.common.authorization = "";
};

const fetchData = async () => {
  try {
    const response = await instanceAPI.get(
      "/auth/anonymous?platform=subscriptions"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Returns Bearer token
export const getToken = async (num) => {
  try {
    const parcelDetails = await fetchData();
    //   console.log(parcelDetails.data);
    localStorage.setItem("token", parcelDetails.data.token);
    return parcelDetails.data;
  } catch (error) {
    console.log(error);
  }
};

//   Returns information about one course
export const getCource = async (id) => {
  try {
    const token = localStorage.getItem("token");
    setToken(token);
    const { data } = await instanceAPI.get(
      `/core/preview-courses/${id}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// Returns array of courses
export const getAllCources = async () => {
  try {
    const token = localStorage.getItem("token");
    setToken(token);
    const { data } = await instanceAPI.get("/core/preview-courses");
    const  {courses}  = await data;
    // console.log(courses);
    return courses;
  } catch (error) {
    setToken();
    throw error;
  }
};

import axios from "axios";

const http = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export default http;

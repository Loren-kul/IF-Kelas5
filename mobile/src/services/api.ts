import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.74:3000/api", // ganti IP jika pakai HP
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
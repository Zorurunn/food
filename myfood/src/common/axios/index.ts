import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-delivery-7wj2.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

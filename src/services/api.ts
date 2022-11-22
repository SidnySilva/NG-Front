import axios from "axios";

export const api = axios.create({
  baseURL: "https://gn-api.herokuapp.com/",
});
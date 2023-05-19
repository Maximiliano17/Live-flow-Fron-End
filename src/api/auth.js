import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://liveflow-backend-production.up.railway.app/api/user/",

  // https://liveflow-backend-production.up.railway.app/api/user/
  // http://localhost:4000/api/user
});

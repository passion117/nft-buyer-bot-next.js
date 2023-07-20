import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL_BASE}/api`,
});

export default apiClient;

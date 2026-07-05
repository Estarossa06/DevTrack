import axios from "axios";

import { env } from "@/config";

const httpClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
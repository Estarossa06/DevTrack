import httpClient from "./httpClient";

import type { LoginData } from "@/types/auth";

export const authApi = {
  login(data: LoginData) {
    return httpClient.post("/auth/login", data);
  },

  register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return httpClient.post("/auth/register", data);
  },

  logout() {
    return Promise.resolve();
  },
};
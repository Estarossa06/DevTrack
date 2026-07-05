import httpClient from "./httpClient";

export const projectApi = {
  getAll() {
    return httpClient.get("/projects");
  },
};
import httpClient from "./httpClient";

export const taskApi = {
  getAll() {
    return httpClient.get("/tasks");
  },
};
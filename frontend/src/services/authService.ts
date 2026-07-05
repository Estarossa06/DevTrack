import type {
  LoginData,
  RegisterData,
  User,
} from "../types/auth";

const demoUser: User = {
  id: "1",

  name: "Sebastián Campo",

  email: "sebastian@devtrack.com",
};

const authService = {
  async login(data: LoginData) {
    console.log("Login:", data);

    return demoUser;
  },

  async register(data: RegisterData) {
    console.log("Register:", data);

    return demoUser;
  },

  async logout() {
    console.log("Logout");
  },
};

export default authService;
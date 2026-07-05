export interface User {
  id: string;

  name: string;

  email: string;
}

export interface LoginData {
  email: string;

  password: string;
}

export interface RegisterData {
  name: string;

  email: string;

  password: string;
}

export interface AuthContextType {
  user: User | null;

  login: (data: LoginData) => Promise<void>;

  logout: () => void;
}
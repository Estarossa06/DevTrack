import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import PasswordInput from "../../ui/PasswordInput";

import useAuth from "@/hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");

    let hasErrors = false;

    if (!email.trim()) {
      setEmailError("El correo electrónico es obligatorio.");
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Ingresa un correo electrónico válido.");
      hasErrors = true;
    }

    if (!password.trim()) {
      setPasswordError("La contraseña es obligatoria.");
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError(
        "La contraseña debe tener al menos 6 caracteres."
      );
      hasErrors = true;
    }

    if (hasErrors) return;

    try {
      setLoading(true);

      await login({
        email,
        password,
      });

      navigate("/");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <FormField
        label="Correo electrónico"
        required
        error={emailError}
      >
        <Input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </FormField>

      <FormField
        label="Contraseña"
        required
        error={passwordError}
      >
        <PasswordInput
          placeholder="********"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />
      </FormField>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>

      <p className="text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link
          to="/register"
          className="font-medium text-[var(--color-primary)]"
        >
          Regístrate
        </Link>
      </p>
    </form>
  );
}
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import PasswordInput from "../../ui/PasswordInput";

import authService from "@/services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");

    let hasErrors = false;

    if (!name.trim()) {
      setNameError("El nombre es obligatorio.");
      hasErrors = true;
    }

    if (!email.trim()) {
      setEmailError("El correo es obligatorio.");
      hasErrors = true;
    }

    if (!password.trim()) {
      setPasswordError("La contraseña es obligatoria.");
      hasErrors = true;
    }

    if (hasErrors) return;

    await authService.register({
      name,
      email,
      password,
    });

    navigate("/login");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField label="Nombre" required error={nameError}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />
      </FormField>

      <FormField label="Correo electrónico" required error={emailError}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
        />
      </FormField>

      <FormField label="Contraseña" required error={passwordError}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
      </FormField>

      <Button type="submit" className="w-full">
        Crear cuenta
      </Button>

      <p className="text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link
          to="/login"
          className="font-medium text-[var(--color-primary)]"
        >
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
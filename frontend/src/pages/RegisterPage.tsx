import { RegisterForm } from "@/components/auth";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-gray-100)]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold">
          DevTrack
        </h1>

        <p className="mb-8 text-[var(--color-gray-600)]">
          Crea una cuenta para comenzar.
        </p>

        <RegisterForm />

      </div>
    </main>
  );
}
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-gray-100)] px-6">

      <h1 className="text-8xl font-bold text-[var(--color-primary)]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Página no encontrada
      </h2>

      <p className="mt-2 text-[var(--color-gray-600)]">
        La página que intentas visitar no existe.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-white transition hover:opacity-90"
      >
        Volver al Dashboard
      </Link>

    </main>
  );
}
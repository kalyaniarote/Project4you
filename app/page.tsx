import { redirect } from "next/navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Project4U 🚀
      </h1>

      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        Buy ready-made projects, final year projects, and admin dashboards
        built with modern technologies.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
        >
          Register
        </a>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleRegister(e: any) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("User already exists");
    }
  }

  return (
    <form onSubmit={handleRegister} className="p-10">
      <h1 className="text-2xl mb-4">Register</h1>

      <input
        placeholder="Name"
        className="border p-2 mb-3 block"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        className="border p-2 mb-3 block"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-3 block"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="bg-green-600 text-white p-2">Register</button>
    </form>
  );
}

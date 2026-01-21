import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}

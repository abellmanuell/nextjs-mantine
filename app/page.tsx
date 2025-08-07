import Link from "next/link";

export default function Demo() {
  return (
    <>
      <ul className="p-20">
        <li>
          <Link href="/dashboard" className="underline text-sky-500">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/login" className="underline text-sky-500">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className="underline text-sky-500">
            Sign up
          </Link>
        </li>
        <li>
          <Link href="/reset_password" className="underline text-sky-500">
            Reset password
          </Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}

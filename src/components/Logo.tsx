import Link from "next/link";
import { NBolt } from "./icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="logo"
      aria-label="nara innovations, home"
      style={light ? { color: "#fff" } : undefined}
    >
      <NBolt />
      <span className="wm">
        <b>nara</b> <span>innovations</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./icons";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
};

/** Internal routes use next/link; mailto and external links use a plain anchor. */
export function SmartLink({ href, className, children, arrow }: Props) {
  const inner = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}

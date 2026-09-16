import Link from "next/link";
import type { ReactNode } from "react";

type NumberedStepProps = {
  number: number;
  title: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
};

export default function NumberedStep({
  number,
  title,
  children,
  href,
  linkLabel,
}: NumberedStepProps) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage font-heading text-xl font-semibold text-white">
        {number}
      </div>
      <div className="pb-2">
        <h3 className="font-heading text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-2 text-charcoal/75">{children}</p>
        {href && linkLabel && (
          <Link
            href={href}
            className="mt-2 inline-block text-sm font-semibold text-sage-dark underline underline-offset-2 hover:text-coral"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

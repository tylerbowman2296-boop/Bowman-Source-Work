import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/20 hover:bg-cyan-300",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:border-cyan-300/60 hover:bg-white/15",
  dark: "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800",
  outline:
    "border border-slate-300 bg-white text-slate-950 hover:border-slate-950 hover:bg-slate-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function getButtonClasses({
  variant,
  size,
  className,
}: {
  variant: Variant;
  size: Size;
  className?: string;
}) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={getButtonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

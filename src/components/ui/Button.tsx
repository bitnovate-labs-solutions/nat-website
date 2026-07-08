import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-gold-500 text-white hover:bg-gold-600 shadow-lg shadow-gold-500/20",
  secondary:
    "bg-white text-foreground hover:bg-beige-100 shadow-lg shadow-black/5",
  outline:
    "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white",
  ghost: "text-gold-600 hover:bg-beige-200",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  showArrow,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

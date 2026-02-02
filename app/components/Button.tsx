type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#f08a3e] text-white shadow-md shadow-[#f08a3e]/30 hover:bg-[#e27a2f]",
  secondary:
    "bg-[#fff2c5] text-[#6a4b1f] shadow-md shadow-[#f6c35b]/20 hover:bg-[#f6c35b]",
  ghost:
    "border border-[#f6c35b] text-[#6a4b1f] hover:bg-[#fff2c5] hover:shadow-md hover:shadow-[#f6c35b]/30",
};

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}

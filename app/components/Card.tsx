import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  icon,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-[#efe1d0] p-6 shadow-md shadow-[#d2b896]/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d2b896]/50 ${className}`}
    >
      {icon ? <div className="mb-4 text-2xl">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-[#2e241f]">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-[#5a4a3f]">{description}</p>
      ) : null}
      {children}
    </div>
  );
}

"use client";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actionLabel?: string;
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  actionLabel = "Zatvori",
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-[#f8efe3] p-8 shadow-2xl shadow-black/20">
        <h3 className="text-xl font-semibold text-[#2e241f]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#5a4a3f]">
          {description}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f08a3e] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#f08a3e]/30 transition hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#e27a2f]"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

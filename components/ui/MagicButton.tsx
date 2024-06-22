import React from "react";

interface ButtonProps {
  title: String;
  onClick?: () => void;
  icon: React.ReactNode;
  position: String;
  otherClasses?: String;
}
const MagicButton = ({
  title,
  onClick,
  icon,
  position,
  otherClasses,
}: ButtonProps) => {
  return (
    <button
      className={`relative inline-flex h-14 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 mt-10`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

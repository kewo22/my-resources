import React, { ReactNode } from "react";

interface ButtonProps {
  label?: string;
  isDisabled?: boolean;
  type?: "button" | "submit";
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const {
    label = "label",
    isDisabled = false,
    type = "button",
    children,
  } = props;
  return (
    <button
      type="submit"
      className="bg-blue-600 px-3 py-2 rounded tracking-wide text-white"
      disabled={isDisabled}
    >
      {children ? children : label}
    </button>
  );
}

import type { InputHTMLAttributes } from "react";

type PropsL = InputHTMLAttributes<HTMLInputElement>;

function cellL(incoming: string) {
  return ["field", incoming].filter(Boolean).join(" ").trim();
}

export function Input({ className = "", ...props }: PropsL) {
  return <input data-ui="input-12" className={cellL(className)} {...props} />;
}

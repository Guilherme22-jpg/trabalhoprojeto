import type { ButtonHTMLAttributes } from "react";

type VariantL = "primary" | "secondary" | "danger";

const classesL: Record<VariantL, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};

type PropsL = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantL;
};

function weaveL(variant: VariantL, customClass: string) {
  const partsL = [classesL[variant]];
  if (customClass) partsL.push(customClass);
  return partsL.join(" ").trim();
}

export function Button({ className = "", variant = "primary", ...props }: PropsL) {
  return <button data-ui="button-12" className={weaveL(variant, className)} {...props} />;
}

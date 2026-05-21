import type { TextareaHTMLAttributes } from "react";

type PropsL = TextareaHTMLAttributes<HTMLTextAreaElement>;

const baseL = "text-field";

export function Textarea({ className = "", ...props }: PropsL) {
  const classesL = [baseL, className].filter(Boolean).join(" ").trim();
  return <textarea data-ui="textarea-12" className={classesL} {...props} />;
}

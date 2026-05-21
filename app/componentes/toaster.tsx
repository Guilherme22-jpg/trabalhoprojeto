"use client";

import { Toaster } from "sonner";

const toastOptionsL = {
  style: {
    background: "#f9fafb",
    color: "#111827",
    border: "1px solid #d1d5db",
  },
};

export default function AppToaster() {
  return <Toaster richColors position="top-right" expand={true} toastOptions={toastOptionsL} />;
}

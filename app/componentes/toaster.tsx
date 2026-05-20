"use client";

import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      richColors
      position="top-right"
      toastOptions={{
        style: {
          background: "rgba(248, 251, 255, 0.96)",
          color: "#1e293b",
          border: "1px solid rgba(15, 118, 110, 0.16)",
        },
      }}
    />
  );
}

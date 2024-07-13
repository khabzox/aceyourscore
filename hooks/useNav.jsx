"use client";

import { useState } from "react";

export function useNav() {
  const [open, setOpen] = useState(false);
  function boxOpen() {
    setOpen((prev) => !prev);
  }
  return { open, boxOpen };
}

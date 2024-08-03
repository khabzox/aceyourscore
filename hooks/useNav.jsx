"use client";

import { useState } from "react";

export function useNav() {
  const [open, setOpen] = useState(false);
  function MenuOpen() {
    setOpen((prev) => !prev);
  }
  return [ open, MenuOpen ];
}

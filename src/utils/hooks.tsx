"use client";
import { usePathname } from "next/navigation";

export const IsMatch = (e: string): boolean => {
  const pathname = usePathname();

  const match = pathname === e;

  return match;
};

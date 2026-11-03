import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskPhone(phone: string): string {
  if (!phone || phone === "N/A") return "N/A";
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length < 4) return "*********";
  const lastFour = cleaned.slice(-4);
  return `*********${lastFour}`;
}

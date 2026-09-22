import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes safely.
 *
 * Example:
 * cn("px-4", condition && "bg-white", "text-black")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
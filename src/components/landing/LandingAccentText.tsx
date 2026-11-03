import type { ReactNode } from "react";
import { COLORS } from "@/constants";

export function LandingAccentText({ children }: { children: ReactNode }) {
  return <span style={{ color: COLORS.PRIMARY }}>{children}</span>;
}

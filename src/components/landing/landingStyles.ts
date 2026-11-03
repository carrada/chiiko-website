/**
 * Chiikö landing type system — "display typography" / editorial oversized type.
 *
 * Regla: una escala DISPLAY por bloque (título de sección o highlight rosa),
 * cuerpo siempre legible (neutral-600). El hero mantiene su propia escala (TechText).
 */

export const landingSection = "w-full px-4 py-16 md:py-24 lg:py-28";

/** Títulos de sección (H2): grande, compacto — estilo studio editorial. */
export const landingDisplaySection =
  "font-inter text-5xl font-bold leading-[0.92] tracking-tight text-black tablet:text-7xl md:text-[9rem] md:leading-[0.9]";

/** Frase corta encima del display (kicker). */
export const landingDisplayKicker =
  "font-inter text-sm font-semibold leading-snug text-black tablet:text-xl md:text-2xl";

/** Palabra o frase de impacto (rosa) — un momento display por celda. */
export const landingDisplayAccent =
  "font-inter block font-bold leading-[0.9] text-5xl tablet:text-6xl md:text-7xl lg:text-8xl";

/** Números 01 / 02 / 03. */
export const landingDisplayStat =
  "font-inter text-7xl font-bold tabular-nums leading-none tablet:text-[9rem] md:text-[10rem] lg:text-[12rem]";

/** @deprecated alias — usar landingDisplaySection */
export const landingSectionTitle = landingDisplaySection;

export const landingSectionLead =
  "mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-neutral-600 md:mt-6 md:text-lg";

export const landingBody = "text-base leading-relaxed text-neutral-600 md:text-lg";

export const landingCardTitle =
  "font-inter text-2xl font-bold text-black md:text-3xl lg:text-4xl";

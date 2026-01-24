// Application-wide constants
// Eliminates "magic numbers/strings" and centralizes configuration

// === TIMING CONSTANTS ===
export const TIMING = {
  INITIAL_LOADING_DURATION_MS: 2000,
  TOAST_DISPLAY_DURATION_MS: 5000,
  ANIMATION_DURATION_MS: 500,
} as const;

// === LAYOUT SPACING CONSTANTS ===
export const LAYOUT_SPACING = {
  SECTION_GAP: {
    marginTop: '100px',
    marginBottom: '100px'
  },
  SECTION_GAP_LARGE: {
    marginTop: '160px',
    marginBottom: '140px'
  },
  SECTION_GAP_SMALL: {
    marginTop: '100px',
    marginBottom: '40px'
  },
  PADDING_VERTICAL: {
    mobile: 'py-12',
    tablet: 'tablet:py-16',
    desktop: 'md:py-24'
  }
} as const;

// === COLORS (Design System) ===
export const COLORS = {
  PRIMARY: '#ce4676',
  BLACK: '#000000',
  WHITE: '#ffffff',
  NEUTRAL_800: '#262626',
  NEUTRAL_600: '#525252',
  NEUTRAL_200: '#e5e5e5',
  GRAY_700: '#374151',
} as const;

// === FONT SIZES ===
export const FONT_SIZES = {
  HERO_TITLE: {
    mobile: 'text-6xl',
    tablet: 'tablet:text-[9rem]',
    desktop: 'md:text-[14rem]'
  },
  SECTION_TITLE: {
    mobile: 'text-4xl',
    tablet: 'tablet:text-5xl',
    desktop: 'md:text-5xl'
  },
  LARGE_NUMBER: {
    mobile: 'text-[8rem]',
    tablet: 'tablet:text-[10rem]',
    desktop: 'md:text-[12rem]'
  }
} as const;

// === CONTACT EMAIL CONSTANTS ===
export const CONTACT_EMAIL = {
  SPANISH: 'hola@chiiko.design',
  ENGLISH: 'hello@chiiko.design',
} as const;

// === FORM IDENTIFIERS ===
export const FORM_IDS = {
  CONTACT_FORM: 'xpqqneqg', // Formspree form ID
} as const;

// === BREAKPOINTS (for reference, Tailwind uses these) ===
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
} as const;

// === Z-INDEX LAYERS ===
export const Z_INDEX = {
  NAVBAR: 40,
  LOADING_SCREEN: 50,
  TOAST: 50,
  MODAL: 60,
} as const;

// === API ENDPOINTS (if needed in future) ===
export const API_ENDPOINTS = {
  FORMSPREE_CONTACT: `https://formspree.io/f/${FORM_IDS.CONTACT_FORM}`,
} as const;

// === ANIMATION VARIANTS ===
export const ANIMATIONS = {
  FADE_IN: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  SLIDE_IN_FROM_BOTTOM: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
} as const;

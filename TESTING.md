# Guía de Testing - Proyecto Chiiko

## Configuración

Para ejecutar los tests, instala las dependencias necesarias:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest
```

Configura Jest en `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
}
```

## Tests Implementados

### 1. Validators Tests (`validators.test.ts`)
- ✅ Validación de strings no vacíos
- ✅ Validación de arrays no vacíos
- ✅ Validación de emails
- ✅ Validación de URLs
- ✅ Validación de rangos numéricos
- ✅ Casos borde (null, undefined, vacíos, tipos incorrectos)

### 2. SEO Builders Tests (`seo-builders.test.ts`)
- ✅ Construcción de esquemas de organización
- ✅ Construcción de esquemas de breadcrumbs
- ✅ Validación de campos requeridos
- ✅ Manejo de errores con inputs inválidos
- ✅ Verificación de Builder Pattern

### 3. Content Strategy Tests (`ContentStrategy.test.ts`)
- ✅ Estrategia de contenido español
- ✅ Estrategia de contenido inglés
- ✅ Factory pattern para selección de idioma
- ✅ Fallback a inglés por defecto
- ✅ Manejo case-insensitive

## Principios F.I.R.S.T. Aplicados

### **F - Fast (Rápido)**
Todos los tests se ejecutan en < 100ms sin dependencias externas.

### **I - Independent (Independiente)**
Cada test es autónomo, no depende del orden de ejecución.

### **R - Repeatable (Repetible)**
Mismo input siempre produce mismo output.

### **S - Self-validating (Auto-validable)**
Cada test tiene aserciones claras (pass/fail).

### **T - Timely (Oportuno)**
Tests escritos junto al código de producción.

## Cobertura Recomendada

```
├── hooks/
│   ├── useContactForm.test.ts (TODO)
│   ├── useToastNotification.test.ts (TODO)
│   └── useSuccessNotification.test.ts (TODO)
├── components/
│   ├── Contact.test.tsx (TODO)
│   └── LoadingScreen.test.tsx (TODO)
├── lib/
│   ├── validators.test.ts ✅
│   └── seo-builders.test.ts ✅
└── strategies/
    └── ContentStrategy.test.ts ✅
```

## Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Modo watch (re-ejecuta al guardar)
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## Objetivo de Cobertura

- **Mínimo**: 70% de cobertura de código
- **Recomendado**: 80-90% para lógica de negocio
- **100%**: Validadores, builders, y estrategias críticas

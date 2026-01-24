/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  collectCoverageFrom: [
    'src/lib/*.{ts,tsx}',
    'src/strategies/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/lib/seo.ts', // Excluir temporalmente - no refactorizado completamente
    '!src/lib/utils.ts', // Funciones auxiliares de Tailwind
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 30,
      lines: 45,
      statements: 45,
    },
    './src/lib/validators.ts': {
      branches: 85,
      functions: 80,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }],
  },
};

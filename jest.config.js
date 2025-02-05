export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  moduleFileExtensions: ['js', 'svelte'],
  testMatch: ['**/test/jest/**/*.steps.jest.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.svelte'],
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1',
    '^\\$app(.*)$': '<rootDir>/.svelte-kit/runtime/app$1'
  }
};
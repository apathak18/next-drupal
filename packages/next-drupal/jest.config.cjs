/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/tests/**/*.test.{ts,tsx}"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  testLocationInResults: true,
  // TODO: Remove prettierPath after Jest v30 release. See https://github.com/jestjs/jest/issues/14305
  prettierPath: null,
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coveragePathIgnorePatterns: [
    "./src/deprecated/*",
    "./src/deprecated.ts",
    "./src/navigation.ts",
    "./src/types/*",
  ],
  coverageReporters: ["lcov", "text", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}

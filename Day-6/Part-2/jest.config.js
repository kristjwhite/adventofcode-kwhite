module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/data/'],
  collectCoverageFrom: ['src/**/*.ts'],
  reporters: ['default', 'jest-junit'],
  roots: ['<rootDir>'], // Specifies where your typescript files are located.
  transform: { '^.+\\.tsx?$': 'ts-jest' }, // The transform config just tells jest to use ts-jest for ts / tsx files.
  testTimeout: 10000
};

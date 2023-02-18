/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@reducers/(.*)': '<rootDir>/src/reducers/$1',
    '@mocks/(.*)': '<rootDir>/src/mocks/$1',
    'react-day-picker/dist/': ['<rootDir>/node_modules/react-day-picker/dist/'],
    '\\.(jpg|ico|jpeg|png)$': '<rootDir>/src/mocks/fileMock.ts'
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};

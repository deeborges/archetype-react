module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)', '!src/**/*.stories.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
};

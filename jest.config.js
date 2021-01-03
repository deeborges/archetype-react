module.exports = {
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js(x)', '!src/**/*.stories.js'],
	verbose: true,
};

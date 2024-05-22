module.exports = {
  moduleFileExtensions: ['js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['setupJest.js'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.js'],
  collectCoverageFrom: ['mmm-pegelstand.js', 'node_helper.js'],
}

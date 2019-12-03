module.exports = {
  transform: {
    'index.test.ts': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/jest/tsconfig.jest.json'
    }
  }
};

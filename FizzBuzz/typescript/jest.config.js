module.exports = {
  roots: [''],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  modulePathIgnorePatterns: ["helper"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testURL: "http://localhost/",
  testEnvironment: "node",
  rootDir: ""
};

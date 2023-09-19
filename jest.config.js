module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mockData.js",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "^@api(.*)$": "<rootDir>/src/api$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@theme(.*)$": "<rootDir>/src/theme$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
  testMatch: ["<rootDir>/__tests__/**/*(*.)@(spec|test).[tj]s?(x)"],
};

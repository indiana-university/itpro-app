module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleNameMapper": {
    "^src/(.+)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  // setting an actual url for jsdom rather than default of "about:config"
  // to avoid SecurityError
  "testURL": "https://localhost:3000"
}
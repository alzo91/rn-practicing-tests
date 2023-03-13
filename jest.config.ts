import { Config } from "@jest/types";

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.
const untranspiledModulePatterns = [
  "(jest-)?react-native",
  "@react-native-community",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
];

const config: Config.InitialOptions = {
  preset: "jest-expo",
  // transformIgnorePatterns: [
  //   `node_modules/(?!${untranspiledModulePatterns.join("|")})`,
  // ],
  testPathIgnorePatterns: ["android/", ".expo/", "e2e/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageDirectory: "tests/reports/jest",
  collectCoverageFrom: ["<rootDir>/src/hooks/**", "<rootDir>/src/screens/**"],
  coverageReporters: ["text-summary", "html", "lcov", "json"],
};

export default config;

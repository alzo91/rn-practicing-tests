### :construction: The main ideia is studying unit test and tests e2e for React Native

###### Installing dependeces to execute your tests

- [x] npm i jest-expo jest react-test-renderer --save-dev
- [x] npm i @types/jest @types/react-test-renderer --save-dev
- [x] npm i ts-node --save-dev
- [x] npm install --save-dev @testing-library/react-native

- [x] npm list jest

```
practicing-test@1.0.0 D:\Projects\ReactNative\practicing-test
├─┬ jest-expo@48.0.2
│ └─┬ jest-watch-typeahead@2.2.1
│ └── jest@29.5.0 deduped
└── jest@29.5.0
```

- [x] create a file jest.config.ts

```
import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

export default config;
```

###### Create a test

- [x] Edited tsconfig.json `"types": ["jest", "react-native", "node"],`
- [x] Create your screen or component. Example: App.tsx
- [x] Create your test App.spec.tsx
- [x] Run unit test `npx jest` or ` npm run test`
- [x] Running `npm run test`. It was necessary to insert this line `"test": "jest"` on package.json

###### Result :partying_face:

![image](https://user-images.githubusercontent.com/19477370/224336610-6308b23f-09a4-4fa6-aa96-01ff50849c91.png)

###### :test_tube: :robot: Running Detox [configs](README-DETOX.md)

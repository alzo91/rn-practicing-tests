### :construction: Configuring detox to e2e

###### Following doc from

https://wix.github.io/Detox/docs/introduction/getting-started

###### Configure local machine

- [x] npm install detox-cli --global
- [x] `if macOS you need configure `
- [ ] brew tap wix/brew
- [ ] brew install applesimutils

###### Configure project

- [x] npm install detox --save-dev
- [x] detox init
- [x] `After following`

```
https://wix.github.io/Detox/docs/introduction/project-setup
```

- [x] New item on .detoxrc.js
      `driver.android.debug`
      `passenger.android.debug`
- [x] Changed item on .detoxrc.js

      ```
      avdName was replaced.
      ```

      ```
      You can run 'emulator -list-avds' and get your avd_name
      ```

- [x] Inserted in gradle.properties
      `android.kotlinVersion=1.8.0`

- [x] android/build.gradle

```
Inserted comment the line that I inserted or modified
```

- [x] android/app/build.gradle

```
Inserted comment the line that I inserted or modified
```

- [x] Create file android/app/src/androidTest/java/com/<your.package>/DetoxTest.java

```
android/app/src/androidTest/java/com/practicingtest/DetoxTest.java
```

```
Replaced the first line for package com.practicingtest;
```

- [x] Created the file xml

```
      android/app/src/main/res/xml/network_security_config.xml
```

- [x] Edited AndroidManifest.xml

```
<application
    ...
    + android:networkSecurityConfig="@xml/network_security_config">
```

###### Running detox

- [x] build: `detox build --configuration android.emu.debug`

```
Windows needs to remove ./gradlew and put only gradlew
```

- [x] test: `detox test --configuration android.emu.debug`

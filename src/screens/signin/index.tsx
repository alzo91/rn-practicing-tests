import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useRenderScreen } from "../../hooks/render-screen";
import { styles } from "./styles";

interface ILogginAttributes {
  nickname?: string | null;
  email?: string | null;
}

export function SignIn() {
  const { setCurrentScreen } = useRenderScreen();
  const [fields, setFields] = useState<ILogginAttributes>({
    nickname: "",
    email: "",
  });

  function setFieldsValue(key: keyof ILogginAttributes, value?: string | null) {
    setFields((state) => ({ ...state, [key]: value }));
  }

  function handleSubmitForm() {
    console.log({ fields });
    if (fields.email && fields.nickname) setCurrentScreen("home");
  }

  return (
    <View style={styles.container}>
      <Text testID="title-info" style={styles.title}>
        Wellcome, e2e testing
      </Text>
      <Text testID="text-info" style={styles.text}>
        This app has a single responsability for us. We have been working to
        teste unit tests and tests end-to-end
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID="input-email"
          placeholder="Enter with your e-mail"
          style={styles.input}
          onChangeText={(e) => setFieldsValue("email", e)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          testID="input-nickname"
          placeholder="Enter with your nickname"
          style={styles.input}
          onChangeText={(e) => setFieldsValue("nickname", e)}
        />
      </View>
      <Button
        testID="button-signin"
        title="Sign In"
        onPress={handleSubmitForm}
      />

      <StatusBar style="auto" />
    </View>
  );
}

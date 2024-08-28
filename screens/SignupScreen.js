import { StyleSheet, Text, View,Alert } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import Loading from "../components/Loading";

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      
    } catch (error) {
      Alert.alert('Kayıt olunamadı!','Lütfen bilgilerinizi kontrol ediniz.')
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message='Kullanıcı oluşturuluyor..' />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});


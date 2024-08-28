import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/auth";

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
      
    } catch (error) {
      Alert.alert('Giriş yapılamadı!','Lütfen bilgilerinizi kontrol ediniz.')
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message="Kullanıcı giriş yapıyor.." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

const styles = StyleSheet.create({});

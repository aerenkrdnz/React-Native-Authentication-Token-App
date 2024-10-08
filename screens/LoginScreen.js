import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/auth";
import { AuthContext } from "../store/auth-context";

export default function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Giriş yapılamadı!", "Lütfen bilgilerinizi kontrol ediniz.");
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message="Kullanıcı giriş yapıyor.." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

const styles = StyleSheet.create({});

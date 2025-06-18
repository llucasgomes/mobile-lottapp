import { useState } from "react";
import { View } from "react-native";
import LoginScreen from "../components/login-screen";
import OnboardingScreen from "../components/onboarding-screen";
import RegisterScreen from "../components/register-screen";
import "../styles/global.css";

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<"onboarding" | "login" | "register">("onboarding")
  return (
    <View className="flex-1 bg-black">
      {/* <OnboardingScreen onEnter={() => setCurrentScreen("login")} /> */}
      {currentScreen === "onboarding" && <OnboardingScreen onEnter={() => setCurrentScreen("login")} />}
      {currentScreen === "login" && (
        <LoginScreen onCreateAccount={() => setCurrentScreen("register")} onLogin={() => alert("Login realizado!")} />
      )}
      {currentScreen === "register" && (
        <RegisterScreen
          onHaveAccount={() => setCurrentScreen("login")}
          onRegister={() => alert("Cadastro realizado!")}
        />
      )}
    </View>
  );
}



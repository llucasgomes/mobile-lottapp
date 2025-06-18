import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SocialButton from "./social-button";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface LoginScreenProps {
    onCreateAccount: () => void;
    onLogin: () => void;
}

export default function LoginScreen({ onCreateAccount, onLogin }: LoginScreenProps) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View className="flex-1 bg-black text-white flex flex-col mx-6">
            {/* Status bar indicator */}

            <View className="flex-1 flex flex-col justify-center ">
                {/* Logo */}
                <Text className="text-4xl font-bold text-white text-center mb-8">LottApp</Text>

                {/* Welcome Message */}
                <Text className="text-xl text-gray-300 text-center mb-12">
                    Bem-vindo de volta,{"\n"}Mano!
                </Text>

                {/* Form */}
                <View className="mb-6">
                    <Input
                        label="Login"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        placeholder="Insira seu CPF"
                        onChangeText={setCpf}
                        value={cpf}
                    />
                    <Input
                        label="Password"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* Forgot Password */}
                <View className="items-end mb-8">
                    <TouchableOpacity onPress={() => { }}>
                        <Text className="text-blue-400  underline">Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <View className="mb-8">
                    <Button label="Entrar"
                        labelClasses="text-black"
                        variant={"primary"}
                        className="w-full"
                        activeOpacity={0.8}
                        size={"xl"}
                        onPress={onLogin}
                    />
                </View>

                {/* Create Account */}
                <View className="items-center mb-6">
                    <TouchableOpacity onPress={onCreateAccount}>
                        <Text className="text-white underline">Criar nova conta</Text>
                    </TouchableOpacity>
                </View>

                {/* Social Login */}
                <View className="items-center pt-10 ">
                    <Text className="text-gray-400 mb-6">Ou continue com</Text>
                    <View className="flex-row gap-3 justify-center space-x-4">
                        <SocialButton icon={<Text className="text-xl font-bold">G</Text>} />
                        <SocialButton icon={<Text className="text-xl">🍎</Text>} />
                        <SocialButton icon={<Text className="text-xl">f</Text>} />
                    </View>
                </View>
            </View>

            {/* Bottom indicator */}
            <View className="pb-8 items-center">
                <View className="w-32 h-1 bg-gray-600 rounded-full" />
            </View>
        </View>
    );
}

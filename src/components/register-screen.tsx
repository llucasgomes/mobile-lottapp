"use client"

import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"


interface RegisterScreenProps {
    onHaveAccount: () => void
    onRegister: () => void
}

export default function RegisterScreen({ onHaveAccount, onRegister }: RegisterScreenProps) {
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <View className="min-h-screen bg-black text-white flex flex-col px-6 max-w-md mx-auto">
            {/* Status bar indicator */}


            <View className="flex-1 flex flex-col justify-center">
                {/* Title */}
                <Text className="text-3xl font-bold text-white text-center mb-6">Criar uma conta</Text>

                {/* Subtitle */}
                <Text className="text-gray-300 text-center mb-12 leading-relaxed">
                    Bora, mano! Cria tua conta e dirigi com a gente!
                </Text>

                {/* Form */}
                <View className="w-full flex flex-col gap-4 mb-6">
                    <Input
                        label="CPF"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        placeholder="Insira seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.nativeEvent.text)}
                    />
                    <Input
                        label="Email"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        keyboardType="email-address"
                        placeholder="Insira seu Email"
                        value={email}
                        onChange={(e) => setEmail(e.nativeEvent.text)}
                    />
                    <Input
                        label="Senha"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.nativeEvent.text)}
                        secureTextEntry={true}
                    />
                    <Input
                        label="Confirme a Senha"
                        labelClasses="text-white py-3 "
                        inputClasses="h-16 px-6 bg-gray-200 placeholder-gray-500 
                        rounded-xl border-0 text-2xl focus:outline-none "
                        placeholder="Senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
                        secureTextEntry={true}
                    />
                </View>

                {/* Register Button */}
                <View className="mb-8">
                    <Button label="Inscrever-se"
                        labelClasses="text-black"
                        variant={"primary"}
                        className="w-full"
                        activeOpacity={0.8}
                        // className="bg-yellow-400 w-full py-10  hover:bg-yellow-500 active:bg-yellow-600"
                        size={"xl"}
                        onPress={onRegister}
                    />

                </View>

                {/* Have Account */}
                <View className="text-center">
                    <TouchableOpacity onPress={onHaveAccount}>
                        <Text className="text-white underline">Já tem uma conta</Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* Bottom indicator */}
            <View className="pb-8 flex justify-center">
                <View className="w-32 h-1 bg-gray-600 rounded-full"></View>
            </View>
        </View>
    )
}

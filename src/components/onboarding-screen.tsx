// import { Bus } from "lucide-react"
import { Text, View } from "react-native"
import { Button } from "./ui/Button"

interface OnboardingScreenProps {
    onEnter: () => void
}

export default function OnboardingScreen({ onEnter }: OnboardingScreenProps) {
    return (
        <View className=" bg-black text-white flex w-full flex-1 flex-col items-center justify-center px-6 max-w-md mx-auto">
            {/* Status bar indicator */}
            <View className="absolute top-24 right-6  ">
                <Text className="text-3xl font-bold text-yellow-400 text-center mb-6 leading-tight">Lotta App</Text>
            </View>

            {/* Bus Icon */}
            <View className="w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center mb-12">
                {/* <Bus size={80} className="text-black" /> */}
            </View>

            {/* Main Title */}
            <Text className="text-3xl font-bold text-yellow-400 text-center mb-6 leading-tight">
                Tá de boa, mano! Bora entrar que tá vazio
            </Text>

            {/* Subtitle */}
            <Text className="text-gray-300 text-center text-lg mb-16 leading-relaxed">
                Brota aqui e descobre a rota cabulosa dos teus sonhos, mano!
            </Text>

            {/* Enter Button */}
            <Button label="Entrar"
                labelClasses="text-black"
                variant={"primary"}
                className="w-full"
                activeOpacity={0.8}
                // className="bg-yellow-400 w-full py-10  hover:bg-yellow-500 active:bg-yellow-600"
                size={"xl"}
                onPress={onEnter}
            />
            {/* Bottom indicator */}
            <View className="absolute bottom-8 w-32 h-1 bg-gray-600 rounded-full"></View>
        </View>
    )
}

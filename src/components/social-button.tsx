"use client"

import type React from "react"
import { TouchableOpacity } from "react-native"

interface SocialButtonProps {
    icon: React.ReactNode
    onClick?: () => void
}

export default function SocialButton({ icon, onClick }: SocialButtonProps) {
    return (
        <TouchableOpacity
            onPress={onClick}
            className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
        >
            {icon}
        </TouchableOpacity>
    )
}

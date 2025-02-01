"use client"

import { PhoneIcon as WhatsappIcon } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/+212616139962"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-10"
            aria-label="Chat on WhatsApp"
        >
            <WhatsappIcon size={24} />
        </Link>
    )
}

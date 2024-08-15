"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loading() {
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        // Animation: Fade In and Out
        tl.to(logoRef.current, {
            duration: 1,
            opacity: 0.8,
            ease: "power1.inOut"
        })
            .to(logoRef.current, {
                duration: 1,
                opacity: 1,
                ease: "power1.inOut"
            });

    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white opacity-90 z-50">
            <div ref={logoRef}>
                <Image src="/logo.svg" alt="Loading" width={150} height={150} />
            </div>
        </div>
    );
}

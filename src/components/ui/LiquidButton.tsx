"use client";

import {
    ReactNode,
    useId,
    useRef,
    useState,
    MouseEvent,
} from "react";
import { motion } from "framer-motion";

interface LiquidButtonProps {
    children: ReactNode;
    href?: string;
    download?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    rel?: string;
    className?: string;
    onClick?: () => void;
    size?: "default" | "compact";
}

export default function LiquidButton({
    children,
    href,
    download = false,
    target,
    rel,
    className = "",
    onClick,
    size = "default",
}: LiquidButtonProps) {
    const filterId = useId();
    const isCompact = size === "compact";
    const buttonRef = useRef<HTMLDivElement>(null);

    const [origin, setOrigin] = useState({
        x: "50%",
        y: "50%",
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();

        setOrigin({
            x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
            y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
        });
    };

    const button = (
        <motion.div
            ref={buttonRef}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            onMouseMove={handleMouseMove}
            onClick={onClick}
            className={`relative inline-flex cursor-pointer select-none items-center justify-center isolate ${
                isCompact
                    ? "min-h-8 min-w-0"
                    : "min-h-[40px] min-w-[130px]"
            } ${className}`}
        >
            {/* Spacer */}
            <span className={`invisible flex items-center gap-2 whitespace-nowrap rounded-full ${
                            isCompact
                                ? "px-3 py-1 text-xs font-normal"
                                : "px-12 py-5 text-base font-semibold"
                        }`}>
                {children}
            </span>

            {/* Goo Filter */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id={filterId}>
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="8"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -9
              "
                            result="goo"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Background */}
            <div
                className="absolute inset-0 overflow-hidden rounded-full"
                style={{ filter: `url(#${filterId})` }}
            >
                {/* Default Background */}
                <div className="absolute inset-0 rounded-full bg-background" />

                {/* Liquid */}
                <motion.span
                    className="absolute rounded-full bg-[#6DD8F8]"
                    style={{
                        width: 40,
                        height: 40,
                        left: origin.x,
                        top: origin.y,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    variants={{
                        rest: {
                            scale: 0,
                        },
                        hover: {
                            scale: 6,
                            transition: {
                                duration: 0.55,
                                ease: "easeInOut",
                            },
                        },
                    }}
                />
            </div>

            {/* Label */}
            <span className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap rounded-full ${
                    isCompact
                        ? "px-3 py-1 text-xs font-normal"
                        : "px-12 py-5 text-base font-semibold"
                } text-foreground`}>
                {children}
            </span>
        </motion.div>
    );

    if (href) {
        return (
            <a
                href={href}
                download={download}
                target={target}
                rel={rel}
                className="inline-block"
            >
                {button}
            </a>
        );
    }

    return button;
}
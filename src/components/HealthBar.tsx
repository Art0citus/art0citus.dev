"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function getHealth() {
    const now = new Date();

    const minutes =
        now.getHours() * 60 +
        now.getMinutes();

    return 100 - (minutes / 1440) * 100;
}

export default function HealthBar() {
    const [health, setHealth] = useState(getHealth());

    useEffect(() => {
        const timer = setInterval(() => {
            setHealth(getHealth());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-10 w-64">

            {/* Empty */}
            <Image
                src="/images/health-empty.png"
                alt=""
                width={256}
                height={40}
                className="h-auto w-full"
            />

            {/* Filled */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${health}%` }}
            >
                <Image
                    src="/images/health-filled.png"
                    alt=""
                    width={256}
                    height={40}
                    className="h-auto w-full"
                />
            </div>

        </div>
    );
}
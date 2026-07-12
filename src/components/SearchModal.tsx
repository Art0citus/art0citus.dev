"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
    Home,
    FolderGit2,
    Newspaper,
    Mail,
    FileText,
    Folder,
} from "lucide-react";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const items = [
    {
        heading: "Navigation",
        children: [
            {
                title: "Home",
                icon: Home,
                href: "/",
            },
            {
                title: "Projects",
                icon: FolderGit2,
                href: "/#projects",
            },
            {
                title: "Blog",
                icon: Newspaper,
                href: "/blog",
            },
            {
                title: "Contact",
                icon: Mail,
                href: "/contact",
            },
            {
                title: "Resume",
                icon: FileText,
                href: "/resume",
            },
        ],
    },

    {
        heading: "Projects",
        children: [
            {
                title: "Expenny",
                icon: Folder,
                href: "/#projects",
            },
            {
                title: "Tirtle",
                icon: Folder,
                href: "/#projects",
            },
            {
                title: "ArtoBot",
                icon: Folder,
                href: "/#projects",
            },
        ],
    },
];

export default function SearchModal({
    open,
    onOpenChange,
}: Props) {
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                onOpenChange(!open);
            }

            if (e.key === "Escape") {
                onOpenChange(false);
            }
        };

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
                onClick={() => onOpenChange(false)}
            />

            {/* Command */}
            <Command
                className="
          fixed
          left-1/2
          top-24
          z-[100]
          w-full
          max-w-xl
          -translate-x-1/2
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-background
          shadow-2xl
        "
            >
                <Command.Input
                    autoFocus
                    placeholder="Search anything..."
                    className="
            w-full
            border-b
            border-border
            bg-transparent
            px-5
            py-4
            text-lg
            outline-none
          "
                />

                <Command.List className="max-h-96 overflow-y-auto p-2">

                    <Command.Empty className="py-8 text-center text-muted-foreground">
                        No results found.
                    </Command.Empty>

                    {items.map((group) => (
                        <Command.Group
                            key={group.heading}
                            heading={group.heading}
                            className="mb-3"
                        >
                            {group.children.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Command.Item
                                        key={item.title}
                                        value={item.title}
                                        onSelect={() => {
                                            router.push(item.href);
                                            onOpenChange(false);
                                        }}
                                        className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-3
                      text-sm
                      transition
                      hover:bg-accent
                      data-[selected=true]:bg-accent
                    "
                                    >
                                        <Icon size={18} />

                                        {item.title}
                                    </Command.Item>
                                );
                            })}
                        </Command.Group>
                    ))}
                </Command.List>

                <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                    ↑ ↓ Navigate &nbsp;&nbsp; Enter Select &nbsp;&nbsp; Esc Close
                </div>
            </Command>
        </>
    );
}
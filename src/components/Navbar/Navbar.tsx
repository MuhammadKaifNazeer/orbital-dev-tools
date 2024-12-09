import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Github, Layers } from "lucide-react"
import { ThemeToggler } from "../ThemeToggler/ThemeToggler"
import Link from "next/link"

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="flex items-center gap-2">
                    <Layers className="size-5" />
                    <span className="text-lg font-bold">Orbital Dev Tools</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <ThemeToggler />
                <Link href={'#'}>
                    <Button><Github className="size-4" /> Github</Button>
                </Link>
            </div>
        </header>
    )
}


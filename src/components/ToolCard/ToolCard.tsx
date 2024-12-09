import { Eye, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'

interface ToolCardProps {
    title: string
    description: string
    href: string
}

export function ToolCard({
    title,
    description,
    href,
}: ToolCardProps) {
    return (
        <Link href={href}>
            <Card className="overflow-hidden hover:shadow-xl transition duration-300 bg-background">
                <div className={cn("aspect-video p-4 rounded-b-xl bg-gradient-to-br from-blue-500 to-blue-600")}>
                    <p className="text-2xl font-bold text-white w-[90%] line-clamp-2">
                        {title}
                    </p>
                </div>
                <div className="flex flex-col px-4 pt-2 pb-3">
                    <p className="text-lg font-semibold text-neutral-800 mb-2.5 line-clamp-1"></p>
                    <p className="text-sm font-medium line-clamp-3 text-muted-foreground md:text-lg h-[76px] -tracking-[0.51px] !leading-6">
                        {description}
                    </p>
                </div>
            </Card>
        </Link>
    )
}


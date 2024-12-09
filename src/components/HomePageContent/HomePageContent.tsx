"use client"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react'
import { SearchCommand } from '../Search/Search'
import { ToolGrid } from '../ToolGrid/ToolGrid'

export default function HomePageContent() {
    return (
        <main className="flex-1">
            <div className="relative p-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl px-6 py-20 text-center">
                    <h1 className="mb-8 text-3xl font-bold text-white">What would you like to create today?</h1>
                    <div className="mx-auto max-w-2xl">
                        <div className="relative">
                            <div className="relative w-full max-w-2xl mx-auto">
                                <Button
                                    variant="outline"
                                    className="relative w-full h-14 justify-start text-left rounded-full bg-background text-sm shadow-md hover:bg-background"
                                    onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                                >
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <span className="ml-10 text-muted-foreground">Search all tools...</span>
                                    <kbd className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none inline-flex h-7 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                        <span className="text-xs">⌘</span>K
                                    </kbd>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Categories</h2>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="blog">Blog Tools</SelectItem>
                            <SelectItem value="writing">Writing Tools</SelectItem>
                            <SelectItem value="seo">SEO Tools</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <ToolGrid />
            </div>
            <SearchCommand />
        </main>
    )
}


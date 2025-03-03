import Link from "next/link"
import { Home, PenSquare, MessageSquare, Image, PenToolIcon as Tool } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import Feedback from "@/components/Feedback/Feedback"
import { Button } from "../ui/button"
import { AuthAndProfile } from "../AuthAndProfile/AuthAndProfile"

export function MainSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="border-b h-14">
                <Feedback />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <Home className="mr-2 h-4 w-4" />
                                    Home
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <PenSquare className="mr-2 h-4 w-4" />
                                    AI Blog Writer
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    AI Text Humanizer
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    AI Chat
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <Image className="mr-2 h-4 w-4" />
                                    AI Image Generator
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="#" className="flex items-center">
                                    <Tool className="mr-2 h-4 w-4" />
                                    AI Tools
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <div className="mt-auto border-t p-4">
                <AuthAndProfile />
            </div>
        </Sidebar>
    )
}


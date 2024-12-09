import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/Sidebar/Sidebar";
import { Navbar } from "@/components/Navbar/Navbar";

export function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-background">
                <MainSidebar />
                <div className="flex-1">
                    <Navbar />
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
}

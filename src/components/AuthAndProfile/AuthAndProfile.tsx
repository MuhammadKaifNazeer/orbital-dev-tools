import { Button } from "../ui/button"
import SigninDialog from "@/components/AuthAndProfile/SigninDialog"

export function AuthAndProfile() {
    return (
        <div >
            {/* <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="flex-1">
                        <div className="font-medium">Muhammad Kaif</div>
                    </div>
                </div> */}
            <div className="flex items-center">
                <SigninDialog />
            </div>
        </div>
    )
}




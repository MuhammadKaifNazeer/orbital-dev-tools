import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "../ui/separator";

export default function SigninDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">Sign in</Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
                <div className="flex flex-col items-center gap-2">
                    <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                        aria-hidden="true"
                    >
                        <svg
                            className="stroke-zinc-800 dark:stroke-zinc-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                        </svg>
                    </div>
                    <DialogHeader>
                        <DialogTitle className="sm:text-center">Welcome</DialogTitle>
                        <DialogDescription className="sm:text-center">
                            Sign in with your Github account.
                        </DialogDescription>
                    </DialogHeader>
                </div>
                <Button>Sign in with Github</Button>
            </DialogContent>
        </Dialog>
    );
}

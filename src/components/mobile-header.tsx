import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import avatarImage from "../../src/assets/Avatar.png"
import { useSidebar } from "./ui/sidebar";


export default function MobileHeader() {
    const { setOpenMobile } = useSidebar();

    return (
        <header className="flex items-center justify-between px-8 h-16 w-full fixed top-0 left-0 md:hidden z-10 bg-white">
            <div>
                <Button className="bg-transparent hover:bg-transparent p-2! -ml-2 shadow-none" onClick={() => setOpenMobile(true)}>
                    <Menu className="text-gray-600 size-6" />
                </Button>
            </div>
            <div>
                <img src={avatarImage} alt="profile avatar" className="size-10 rounded-full shrink-0" />
            </div>
        </header>
    )
}
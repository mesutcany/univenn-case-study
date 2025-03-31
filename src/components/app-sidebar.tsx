import { ChevronDown } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Button } from "./ui/button";
import avatarImage from "../../src/assets/Avatar.png"
import { InboxIcon, JobsIcon, OverviewIcon, SettingsIcon, SupportIcon, TalentPoolIcon, ThreeDotsIcon } from "./svgs";

const topMenuItems = [
    {
        title: "Overview",
        url: "#",
        icon: OverviewIcon,
    },
    {
        title: "Jobs",
        url: "#",
        icon: JobsIcon
    },
    {
        title: "Talent Pool",
        url: "#",
        icon: TalentPoolIcon,
    },
    {
        title: "Inbox",
        url: "#",
        icon: InboxIcon,
    }
];

const bottomMenuItems = [
    {
        title: "Support",
        url: "#",
        icon: SupportIcon
    },
    {
        title: "Settings",
        url: "#",
        icon: SettingsIcon
    }
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="px-6 pt-8">
                <div className="flex items-center justify-between px-3.5 py-2.5 border border-[#EAECF0] rounded-[8px]">
                    <div className="flex items-center gap-1.5">
                        <span className="w-8 h-8 block rounded-[8px] bg-[#9600D7]"></span>
                        <span className="text-base font-medium">Hrpanda</span>
                    </div>
                    <span className="[&>svg]:size-5 text-gray-400">
                        <ChevronDown />
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent className="mt-6">
                <SidebarGroup className="px-6 pt-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {topMenuItems.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild className="-mx-2 [&>svg]:size-6 text-base font-medium h-10 gap-3">
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                <SidebarGroup className="px-6 pt-0 mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {bottomMenuItems.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild className="-mx-2 [&>svg]:size-6 text-base font-medium h-10 gap-3">
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <span className="m-6 block h-[1px] bg-gray-200"></span>

            <SidebarFooter className="px-6">
                <div className="flex items-center justify-between">
                    <img src={avatarImage} alt="" className="size-10 rounded-full shrink-0" />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">Olivia Rhye</span>
                        <span className="text-sm">oliviarhye@hrpanda.co</span>
                    </div>
                    <Button className="bg-transparent hover:bg-transparent shadow-none">
                        <ThreeDotsIcon />
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

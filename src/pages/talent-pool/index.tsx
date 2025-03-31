import { AlignEndHorizontal, ChevronDown, Columns, Ellipsis, Plus, Search, SortAscIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "../../components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";

export default function TalentPoolPage() {
    return (
        <main className="flex-1 px-8">
            <div className="flex flex-row pt-8">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <h4 className="text-3xl text-gray-900">Talent Pool</h4>
                            <span className="flex items-center justify-center h-8 px-2.5 bg-gray-100 rounded-2xl">1002</span>
                        </div>

                        <p className="text-gray-500">Keep track of the applicants</p>
                    </div>

                    <div>
                        <Button className="h-10 px-4! bg-gray-900">
                            <Plus />
                            <span>Add Talent</span>
                        </Button>
                    </div>
                </div>
            </div>

            <hr className="my-6" />

            <div className="flex gap-3 justify-end flex-wrap">
                <div>
                    <form>
                        <div className="relative">
                            <Input type="text" placeholder="Search" className="pl-10 w-[140px] h-8" />
                            <Search className="size-5 absolute top-1/2 left-3.5 -translate-y-1/2" />
                        </div>
                    </form>
                </div>

                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="h-8 px-4! py-1 bg-transparent! shadow-none! text-gray-900 border border-gray-300 text-xs">
                                <SortAscIcon />
                                <span>Sort</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto">
                            <div className="flex gap-4">
                                <Select>
                                    <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                        <SelectValue placeholder="Date Added" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="stage">
                                            Stage
                                        </SelectItem>
                                        <SelectItem value="ai-fit-score">
                                            AI Fit Score
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                        <SelectValue placeholder="Date Added" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="stage">
                                            Stage
                                        </SelectItem>
                                        <SelectItem value="ai-fit-score">
                                            AI Fit Score
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="h-8 px-4! py-1 bg-transparent! shadow-none! text-gray-900 border border-gray-300 text-xs">
                                <AlignEndHorizontal />
                                <span>Columns</span>
                                <ChevronDown />

                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto py-3 px-4">
                            <div className="flex flex-col gap-4 min-w-[210px]">
                                <div className="flex items-center">
                                    <Label htmlFor="name">
                                        Name
                                    </Label>
                                    <Switch id="name" className="ml-auto" checked={true} />
                                </div>

                                <div className="flex items-center">
                                    <Label htmlFor="stage">
                                        Stage
                                    </Label>
                                    <Switch id="stage" className="ml-auto" />
                                </div>

                                <div className="flex items-center">
                                    <Label htmlFor="rejection-stage">
                                        Rejection Stage
                                    </Label>
                                    <Switch id="rejection-stage" className="ml-auto" />
                                </div>

                                <div className="flex items-center">
                                    <Label htmlFor="ai-fit-score">
                                        AI Fit Score
                                    </Label>
                                    <Switch id="ai-fit-score" className="ml-auto" />
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <div>
                    <Select value="dark">
                        <SelectTrigger className="h-8! w-auto!">
                            <div className="flex items-center gap-2">
                                <Columns className="size-[15px]" />
                                <SelectValue placeholder=""></SelectValue>
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Button className="h-8 bg-transparent p-2 hover:bg-transparent shadow-none text-gray-900">
                        <Ellipsis />
                    </Button>
                </div>
            </div>
        </main>
    )
}
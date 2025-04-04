import { AlignEndHorizontal, ChevronDown, Columns, Ellipsis, Search, SortAscIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { SortingState, Table } from "@tanstack/react-table"
import { Applicant } from "../types"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useData } from "./data-provider"
import { useEffect, useState } from "react"
import { ColumnsIcon, FlashIcon, SearchIcon, SheetsIcon, SortIcon } from "./svgs"

type TalentPoolTableFiltersProps = {
    table: Table<Applicant>,
    sorting: SortingState,
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>
}

const sortingTextsByType = {
    string: {
        low: "A to Z",
        high: "Z to A"
    },
    number: {
        low: " Low to High",
        high: "High to Low"
    },
    date: {
        low: "From Newest",
        high: "From Oldest"
    }
}

export default function TalentPoolTableFilters({ table, setSorting }: TalentPoolTableFiltersProps) {
    const { search } = useData();
    const [query, setQuery] = useState("");
    const sorters = table.getState().sorting;
    const currentSortingColumn = table.getFlatHeaders().find(header => {
        return header.column.columnDef.id === sorters[0].id
    });
    const lowHighTexts = sortingTextsByType[currentSortingColumn?.column?.columnDef?.meta?.type || "string"];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            search(query);
        }, 300);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query])


    return (
        <div className="grid px-8 grid-cols-2 gap-2 sm:grid-cols-3  md:flex md:gap-3 md:justify-end md:flex-wrap">
            <div className="col-span-2 sm:col-span-3">
                <form>
                    <div className="relative">
                        <Input type="text" placeholder="Search" className="pl-10 w-full md:w-[140px] h-8 text-sm placeholder:text-[#667085]" value={query} onChange={event => setQuery(event.target.value)} />
                        <SearchIcon className="size-5 absolute top-1/2 left-3.5 -translate-y-1/2 text-[2px]" />
                    </div>
                </form>
            </div>

            <div className="col-span-1">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full md:w-auto h-8 px-4! py-1 bg-transparent! shadow-none! text-gray-900! border border-gray-300 text-xs">
                            <SortIcon />
                            <span>Sort</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto">
                        <div className="flex gap-4">
                            <Select value={sorters[0].id} onValueChange={value => {
                                setSorting((prevSorting) => prevSorting.map(sorting => {
                                    return {
                                        id: value,
                                        desc: sorting.id === value ? !sorting.desc : false
                                    }
                                }))
                            }}>
                                <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                    <SelectValue />
                                </SelectTrigger>

                                <SelectContent>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        headerGroup.headers
                                            .filter(header => header.column.columnDef.enableSorting !== false)
                                            .map(header => (
                                                <SelectItem value={header.column.columnDef.id?.toString() ?? ""} data-id={header.column.columnDef.id?.toString()}>
                                                    {header.column.columnDef.header?.toString()}
                                                </SelectItem>
                                            ))
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={sorters[0].desc ? "desc" : "asc"} onValueChange={(value) => {
                                setSorting((prevSorting) => prevSorting.map(sorting => {
                                    return {
                                        id: sorting.id,
                                        desc: value === "desc"
                                    }
                                }))
                            }}>
                                <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                    <SelectValue placeholder="Date Added" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="asc">
                                        {lowHighTexts.low}
                                    </SelectItem>
                                    <SelectItem value="desc">
                                        {lowHighTexts.high}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="col-span-1">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full md:w-auto h-8 px-4! py-1 bg-transparent! shadow-none! text-gray-900! border border-gray-300 text-xs">
                            <ColumnsIcon className="size-5" />
                            <span>Columns</span>
                            <ChevronDown />

                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto py-3 px-4">
                        <div className="flex flex-col gap-4 min-w-[210px]">
                            {table.getAllColumns().filter((column) => !["select", "actions"].includes(column.id))
                                .map((column) => {
                                    return (
                                        <div className="flex items-center gap-2" key={column.id}>
                                            <FlashIcon />
                                            <Label htmlFor={column.id} className="text-[#344054]">
                                                {typeof column.columnDef.header === "function" ? column.columnDef.id : column.columnDef.header}
                                            </Label>
                                            <Switch
                                                id={column.id}
                                                className="ml-auto disabled:opacity-100! disabled:bg-[#D0D5DD]!"
                                                checked={column.getIsVisible()}
                                                disabled={!column.getCanHide()}
                                                onCheckedChange={column.toggleVisibility}
                                            />
                                        </div>
                                    )
                                })}
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="col-span-1">
                <Select value="sheet">
                    <SelectTrigger className="h-8! w-full! md:w-auto! font-medium text-gray-900! text-xs [&>svg]:size-4.5 [&>svg]:text-gray-900 [&>svg]:opacity-1">
                        <div className="flex items-center gap-2">
                            <SheetsIcon className="size-5" />
                            <SelectValue placeholder="Sheet View"></SelectValue>
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sheet">Sheet View</SelectItem>
                        <SelectItem value="list">List View</SelectItem>
                        <SelectItem value="kanban">Kanban View</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="col-span-1">
                <Button className="h-8 bg-transparent p-2 hover:bg-transparent shadow-none text-gray-900">
                    <Ellipsis />
                </Button>
            </div>
        </div>
    )
}
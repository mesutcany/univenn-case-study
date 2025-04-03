import { AlignEndHorizontal, ChevronDown, Columns, Ellipsis, Search, SortAscIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Table } from "@tanstack/react-table"
import { Applicant } from "../types"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useData } from "./data-provider"

type TalentPoolTableFiltersProps = {
    table: Table<Applicant>
}

const sorters = [
    {
        "label": "Aşama",
        "key": "stage",
        "type": "string"
    },
    {
        "label": "AI Puanı",
        "key": "aiFit",
        "type": "number"
    },
    {
        "label": "Kaynak",
        "key": "sourceType",
        "type": "string",
    },
    {
        "label": "Değerlendirme",
        "key": "avgRating",
        "type": "number"
    },
    {
        "label": "Eklenme Tarihi",
        "key": "createdAt",
        "type": "date"
    },
    {
        "label": "Maaş Beklentisi",
        "key": "salaryExp",
        "type": "number"
    },
    {
        "label": "Telefon",
        "key": "phoneNumber",
        "type": "string"
    },
    {
        "label": "Son Güncelleme",
        "key": "updatedAt",
        "type": "string"
    },
    {
        "label": "Yaş",
        "key": "dateOfBirth",
        "type": "number"
    },
    {
        "label": "Cinsiyet",
        "key": "gender",
        "type": "string"
    },
    {
        "label": "Mezun Olduğu Okul",
        "key": "university",
        "type": "string"
    }
];

export default function TalentPoolTableFilters({ table }: TalentPoolTableFiltersProps) {
    const { setQuery, query, sort, setSort } = useData();

    const sortType = sorters.find(sorter => sorter.key === sort.key)?.type;

    return (
        <div className="flex gap-3 justify-end flex-wrap mt-6">
            <div>
                <form>
                    <div className="relative">
                        <Input type="text" placeholder="Search" className="pl-10 w-[140px] h-8" value={query} onChange={event => setQuery(event.target.value)} />
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
                            <Select value={sort.key} onValueChange={(value) => {
                                setSort({
                                    key: value,
                                    value: sort.key === value ? sort.value : "desc",
                                })
                            }}>
                                <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                    <SelectValue placeholder="Date Added" />
                                </SelectTrigger>

                                <SelectContent>
                                    {sorters.map(sorter => {
                                        return (
                                            <SelectItem value={sorter.key}>
                                                {sorter.label}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>

                            <Select value={sort.value} onValueChange={(value) => {
                                setSort({
                                    ...sort,
                                    value
                                })
                            }}>
                                <SelectTrigger className="bg-gray-200 text-gray-900! [&>svg]:text-gray-900! [&>svg]:opacity-100!">
                                    <SelectValue placeholder="Date Added" />
                                </SelectTrigger>

                                <SelectContent>
                                    {
                                        sortType === "string" &&
                                        (
                                            <>
                                                <SelectItem value="desc">
                                                    A to Z
                                                </SelectItem>
                                                <SelectItem value="asc">
                                                    Z to A
                                                </SelectItem>
                                            </>
                                        )
                                    }
                                    {
                                        sortType === "number" && (
                                            <>
                                                <SelectItem value="desc">
                                                    Low to High
                                                </SelectItem>
                                                <SelectItem value="asc">
                                                    Hight to Low
                                                </SelectItem>
                                            </>
                                        )
                                    }
                                    {
                                        sortType === "date" && (
                                            <>
                                                <SelectItem value="desc">
                                                    From Newest
                                                </SelectItem>
                                                <SelectItem value="asc">
                                                    From Oldest
                                                </SelectItem>
                                            </>
                                        )
                                    }

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
                            {table.getAllColumns().filter((column) => !["select", "actions"].includes(column.id))
                                .map((column) => {
                                    return (
                                        <div className="flex items-center" key={column.id}>
                                            <Label htmlFor={column.id} className={!column.getCanHide() ? "text-g" : ""}>
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
    )
}
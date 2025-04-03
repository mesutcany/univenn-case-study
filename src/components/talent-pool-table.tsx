import { useState } from "react"
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    type SortingState,
    getPaginationRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table"
import { MoreVertical, ChevronDown, Star, ChevronUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Applicant } from "../types"
import TalentPoolTableFilters from "./talent-pool-table-filters"
import pdfIcon from "../../src/assets/Pdf.png"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useData } from "./data-provider"


const stages = {
    "Sourced": "#808080",
    "Applied": "#165ad0",
    "Contacted": "#15c39a",
    "Interview": "#51aaff",
    "Evaluation": "#c01048",
    "Offer": "#008000",
    "Hired": "#800080",
    "Rejected": "#ff0000"
}

type TalentTableProps = {
    data: Applicant[]
}

export default function TalentTable({ data }: TalentTableProps) {
    const { sort, setSort } = useData();
    const [sorting, setSorting] = useState<SortingState>();
    const [columnVisibility, setColumnVisibility] = useState({ Phone: false, "Last Action": false });
    const [rowSelection, setRowSelection] = useState({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const columns: ColumnDef<Applicant>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <TableCell className="py-3">
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
                </TableCell>
            ),
            enableSorting: false,
            enableHiding: false
        },
        {
            id: "fullName",
            accessorFn: (row) => row.firstName + " " + row.lastName,
            header: "Name",
            enableHiding: false,
            cell: ({ row }) => {
                const candidate = row.original;
                // console.log(candidate)

                return (
                    <TableCell className="py-3 border-r min-w-[240px]">
                        <div className="flex items-center gap-3">
                            <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium`}
                            >
                                <Avatar>
                                    <AvatarImage src={candidate.profilePhotoUrl || ""} />
                                    <AvatarFallback>{candidate.firstName[0]}{candidate.lastName[0]}</AvatarFallback>
                                </Avatar>

                            </div>
                            <span className="font-medium">{`${candidate.firstName} ${candidate.lastName}`}</span>
                        </div>
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => {
                return <TableCell className="py-3 border-r"><span className="text-gray-600">{row.getValue("email")}</span></TableCell>
            },
            enableSorting: true,
            enableHiding: false
        },
        {
            accessorKey: "stage",
            id: "Stage",
            header: () => {
                return (
                    <div className="flex items-center cursor-pointer" onClick={() => {
                        setSort(prevSort => {
                            return {
                                key: "stage",
                                value: prevSort.key === "stage" ? prevSort.value === "asc" ? "desc" : "asc" : "desc"
                            }
                        })
                    }}>
                        <span>Stage</span>
                        {sort.key === "stage" ? sort.value === "asc" ? <ChevronDown /> : <ChevronUp /> : <ChevronDown />}
                    </div>
                )
            },
            cell: ({ row }) => {
                const candidate = row.original

                return (
                    <TableCell className="border-r p-0!">
                        <div className="gap-2 h-full w-full">
                            <Select defaultValue={candidate.activeApplication?.stage.name}>
                                <SelectTrigger value={candidate.activeApplication?.stage.name} className="flex items-center gap-2 h-full! w-full!">
                                    <SelectValue placeholder="Stage"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(stages).map(([label, color]) => {
                                        return (
                                            <SelectItem value={label}>
                                                <span style={{ backgroundColor: color }} className="block w-1.5 h-1.5 rounded-full"></span>
                                                {label}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                        </div>
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "rating",
            id: "Rating",
            header: () => {
                return (
                    <div className="flex items-center">
                        <span>Rating</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                )
            },
            cell: ({ row }) => {
                const rating = row.original.rating;
                return (
                    <TableCell className="py-3 border-r">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                                />
                            ))}
                        </div>
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "position",
            id: "Applied Job",
            header: "Applied Job",
            cell: ({ row }) => {
                // const position = row.original.
                return (
                    <TableCell className="py-3 border-r">
                        {row.original.activeApplication?.jobListing.type === "ACTIVE" && <span className="inline-flex justify-center items-center px-2 py-0.5 border border-[#C3B5FD] bg-[#F5F3FF] text-[#6927DA] rounded-2xl text-xs">{row.original.activeApplication?.jobListing.name}</span>}
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "resume",
            header: "Resume",
            cell: ({ row }) => {
                const hasResume = row.original.activeApplication?.resume

                return (
                    <TableCell className="py-3 border-r">
                        {hasResume && <div className="flex justify-center">
                            <span className="inline-flex items-center justify-center">
                                {hasResume ? <img src={pdfIcon} alt="pdf" /> : null}
                            </span>
                        </div>}
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "salary",
            id: "Salary",
            header: () => {
                return (
                    <div className="flex items-center">
                        <span>Maaş Beklentisi</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                )
            },
            cell: ({ row }) => {
                const salary = row.original.salaryExp
                return (
                    <TableCell className="py-3 border-r">
                        {salary ? <span>{salary}</span> : null}
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "phone",
            id: "Phone",
            header: () => {
                return (
                    <div className="flex items-center">
                        <span>Telefon</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                )
            },
            cell: ({ row }) => {
                const phone = row.original.phoneNumber
                return (
                    <TableCell className="py-3 border-r">
                        {phone ? <span>{phone}</span> : null}
                    </TableCell>
                )
            },
        },
        {
            accessorKey: "lastDate",
            id: "Last Action",
            header: () => {
                return (
                    <div className="flex items-center">
                        <span>Son Güncelleme</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                )
            },
            cell: ({ row }) => {
                const lastDate = row.original.lastDate
                return (
                    <TableCell className="py-3 border-r">
                        {lastDate ? <span>{lastDate}</span> : null}
                    </TableCell>
                )
            },
        },
        {
            id: "actions",
            header: "",
            cell: () => {
                return (
                    <TableCell className="py-3">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </TableCell>
                )
            },
        },
    ]

    const table = useReactTable({
        data: data,
        columns,
        state: {
            sorting,
            rowSelection,
            columnVisibility,
            columnFilters
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: (val) => {
            console.log(val)
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 18
            }
        }
    })

    console.log(table.getState().columnFilters)

    return (
        <div>
            <TalentPoolTableFilters table={table} />

            <Table className="mt-6">
                <TableHeader>
                    <TableRow>
                        {table.getHeaderGroups().map((headerGroup) =>
                            headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className={`text-gray-700 font-medium h-10 ${!header.id.includes("select") && !header.id.includes("actions") ? "border-r" : ""}`}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            )),
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            return (
                                <TableRow
                                    key={row.id}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                    ))}
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Not found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}


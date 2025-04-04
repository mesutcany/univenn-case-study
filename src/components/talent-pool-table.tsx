import { useEffect, useRef, useState } from "react"
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    type SortingState,
    getPaginationRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table"
import { MoreVertical, Star, ArrowDown, ArrowUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Applicant } from "../types"
import TalentPoolTableFilters from "./talent-pool-table-filters"
import pdfIcon from "../../src/assets/Pdf.png"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useData } from "./data-provider";
import { Badge } from "./ui/badge";
import { formatDate } from "../lib/utils"

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
    const { sort, loading, getNextPage } = useData();
    const [sorting, setSorting] = useState<SortingState>([{ id: "aiFit", desc: true }]);
    const [columnVisibility, setColumnVisibility] = useState({ Phone: false, "Last Action": false });
    const [rowSelection, setRowSelection] = useState({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const elRef = useRef<HTMLElement>(null);

    const columns: ColumnDef<Applicant>[] = [
        {
            id: "Name",
            accessorFn: (row) => row.firstName + " " + row.lastName,
            header: ({ table }) => (
                <div className="flex items-center gap-2">
                    <Checkbox
                        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                    <span className="text-xs">Name</span>
                </div>
            ),
            cell: ({ row }) => {
                const candidate = row.original;

                return (
                    <TableCell className="py-3 border-r min-w-[240px] flex items-center gap-2">
                        <span>
                            <Checkbox
                                checked={row.getIsSelected()}
                                onCheckedChange={(value) => row.toggleSelected(!!value)}
                                aria-label="Select row"
                            />
                        </span>
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
            enableHiding: false,
            enableSorting: false,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => {
                return <TableCell className="py-3 border-r"><span className="text-gray-600 text-xs">{row.getValue("email")}</span></TableCell>
            },
            enableHiding: false,
            enableSorting: false,
        },
        {
            accessorKey: "stage",
            id: "stage",
            header: "Stage",
            cell: ({ row }) => {
                const candidate = row.original

                return (
                    <TableCell className="border-r p-0!">
                        <div className="gap-2 h-full w-full">
                            <Select defaultValue={candidate.activeApplication?.stage.name}>
                                <SelectTrigger value={candidate.activeApplication?.stage.name} className="flex items-center gap-2 h-full! w-full! border-0 shadow-none focus-visible:outline-0! text-sm cursor-pointer">
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
            enableSorting: true,
            meta: {
                type: "string"
            }
        },
        {
            accessorKey: "rejectionReason",
            header: "Rejection Reason",
            cell: ({ row }) => (
                <TableCell className="py-3 border-r">
                    {row.original.activeApplication?.rejectedReasons.join(", ")}
                </TableCell>
            ),
            enableSorting: false,
        },
        {
            id: "aiFit",
            accessorKey: "activeApplication.aiFit",
            header: "AI Fit Score",
            cell: ({ row }) => {
                const score = row.original.activeApplication?.aiFit

                if (!score) {
                    return <TableCell className="py-3 border-r">
                        -
                    </TableCell>
                }

                return <TableCell className="py-3 border-r">
                    {
                        score > 50
                            ? <Badge variant="destructive">
                                <ArrowUp></ArrowUp>
                                {score}%
                            </Badge>
                            : <Badge>
                                <ArrowDown></ArrowDown>
                                {score}%
                            </Badge>
                    }
                </TableCell>
            },
            enableSorting: true,
            meta: {
                type: "number"
            }
        },
        {
            id: "avgRating",
            accessorKey: "rating",
            header: "Rating",
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
            enableSorting: true,
            meta: {
                type: "number"
            }
        },
        {
            accessorKey: "activeApplication.jobListing.name",
            id: "Applied Job",
            header: "Applied Job",
            cell: ({ row }) => {
                return (
                    <TableCell className="py-3 border-r">
                        {row.original.activeApplication?.jobListing.type === "ACTIVE" && <span className="inline-flex justify-center items-center px-2 py-0.5 border border-[#C3B5FD] bg-[#F5F3FF] text-[#6927DA] rounded-2xl text-xs">{row.original.activeApplication?.jobListing.name}</span>}
                    </TableCell>
                )
            },
            enableSorting: false,
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
            enableSorting: false,
        },
        {
            id: "salaryExp",
            accessorKey: "salary",
            header: "Salary Exp.",
            cell: ({ row }) => {
                const salary = row.original.salaryExp
                return (
                    <TableCell className="py-3 border-r">
                        {salary ? <span>{salary}</span> : null}
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "number"
            }
        },
        {
            id: "phoneNumber",
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => {
                const phone = row.original.phoneNumber
                return (
                    <TableCell className="py-3 border-r">
                        {phone ? <span>{phone}</span> : null}
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "string"
            }
        },
        {
            id: "updatedAt",
            accessorKey: "updatedAt",
            header: "Last Action",
            cell: ({ row }) => {
                const updatedAt = row.original.updatedAt
                return (
                    <TableCell className="py-3 border-r">
                        {updatedAt ? <span>{formatDate(updatedAt)}</span> : null}
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "date"
            }
        },
        {
            id: "dateOfBirth",
            header: "Age",
            accessorKey: "age",
            cell: ({ row }) => {
                return (
                    <TableCell className="py-3 border-r">
                        <div className="flex items-center justify-center">
                            {row.original.age ?? ""}
                        </div>
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "number"
            }
        },
        {
            id: "gender",
            header: "Gender",
            accessorKey: "gender",
            cell: ({ row }) => {
                return (
                    <TableCell className="py-3 border-r">
                        <div className="flex items-center justify-center">
                            {row.original.gender ?? ""}
                        </div>
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "string"
            }
        },
        {
            id: "gradUni",
            header: "Graduated Uni.",
            accessorKey: "gradUni",
            cell: ({ row }) => {
                return (
                    <TableCell className="py-3 border-r">
                        <div className="flex items-center justify-center">
                            {row.original.gradUni ?? ""}
                        </div>
                    </TableCell>
                )
            },
            enableSorting: true,
            meta: {
                type: "string"
            }
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
            enableSorting: false,
        },
    ];

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
        manualPagination: true,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
    });

    useEffect(() => {
        if (loading || sorting.length === 0) {
            return
        }
        const { id, desc } = sorting[0];
        sort(id, desc ? "desc" : "asc");
    }, [sorting]);

    useEffect(() => {
        if (!elRef.current) {
            return;
        }

        function handler(event: any) {
            if (loading) {
                return
            }

            const element = event.currentTarget;
            if (Math.abs(element.scrollHeight - (element.scrollTop + element.clientHeight)) <= 1) {
                getNextPage();
            }
        }

        const element = elRef.current.closest("[data-slot='table-container']");
        element?.addEventListener("scroll", handler)

        return () => {
            element?.removeEventListener("scroll", handler)
        }
    }, [loading]);

    return (
        <>
            <TalentPoolTableFilters table={table} sorting={sorting} setSorting={setSorting} />
            <Table ref={elRef}>
                <TableHeader>
                    <TableRow>
                        {table.getHeaderGroups().map((headerGroup) =>
                            headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="text-gray-700 font-medium h-10">
                                    <div
                                        className={
                                            header.column.getCanSort()
                                                ? 'cursor-pointer select-none flex items-center justify-between gap-1 text-xs'
                                                : 'text-xs'
                                        }
                                        onClick={() => {
                                            const nextDirection = header.column.getIsSorted() ? header.column.getIsSorted() === "asc" ? "desc" : "asc" : "asc"
                                            header.column.toggleSorting(nextDirection === "desc")
                                        }}
                                        title={
                                            header.column.getCanSort()
                                                ? header.column.getNextSortingOrder() === 'asc'
                                                    ? 'Sort ascending'
                                                    : header.column.getNextSortingOrder() === 'desc'
                                                        ? 'Sort descending'
                                                        : 'Clear sort'
                                                : undefined
                                        }
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {header.column.getCanSort()
                                            ? !header.column.getIsSorted()
                                                ? <ArrowDown className="size-3.5" />
                                                : header.column.getIsSorted() === "asc" ? <ArrowUp className="size-3.5" /> : <ArrowDown className="size-3.5" />
                                            : null}
                                    </div>
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
                            <TableCell colSpan={columns.length} className="h-24 text-center"></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </ >
    )
}


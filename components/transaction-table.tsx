"use client"

import * as React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { IconDotsVertical, IconEye, IconShieldCheck, IconAlertTriangle } from "@tabler/icons-react"

export function TransactionTable({ data }: { data: any[] }) {
    return (
        <div className="rounded-md border mx-4 lg:mx-6 overflow-hidden">
            <Table>
                <TableHeader className="bg-muted/50">
                    <TableRow>
                        <TableHead className="w-[120px]">Transaction ID</TableHead>
                        <TableHead>User ID</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>Risk Score</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((txn) => (
                        <TableRow key={txn.id} className="hover:bg-muted/30">
                            <TableCell className="font-mono text-xs font-medium">
                                {txn.id}
                            </TableCell>
                            <TableCell className="font-medium">{txn.userId}</TableCell>
                            <TableCell>${txn.amount.toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className="font-normal capitalize">
                                    {txn.channel}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className={`h-2 w-2 rounded-full ${txn.riskScore > 80 ? 'bg-destructive' :
                                            txn.riskScore > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                                        }`} />
                                    <span className="font-medium">{txn.riskScore}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    variant={
                                        txn.status === "Allowed" ? "outline" :
                                            txn.status === "Blocked" ? "destructive" : "secondary"
                                    }
                                    className={
                                        txn.status === "Allowed" ? "text-emerald-600 border-emerald-600/20 bg-emerald-500/10" :
                                            txn.status === "Challenged" ? "text-amber-600 border-amber-600/20 bg-amber-500/10" : ""
                                    }
                                >
                                    {txn.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <IconDotsVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>
                                            <IconEye className="mr-2 h-4 w-4 text-muted-foreground" />
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-emerald-600">
                                            <IconShieldCheck className="mr-2 h-4 w-4" />
                                            Allow
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">
                                            <IconAlertTriangle className="mr-2 h-4 w-4" />
                                            Report Fraud
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

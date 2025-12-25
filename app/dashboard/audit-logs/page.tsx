"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconCalendar, IconDownload, IconHistory } from "@tabler/icons-react"

const logs = [
    { id: "L-1021", user: "admin_01", action: "Block Transaction", target: "TXN_9422", time: "2024-06-30 14:45", status: "Success" },
    { id: "L-1022", user: "system_bot", action: "Flagged", target: "TXN_9424", time: "2024-06-30 14:40", status: "Success" },
    { id: "L-1023", user: "admin_02", action: "Override Allow", target: "TXN_9410", time: "2024-06-30 14:30", status: "Success" },
    { id: "L-1024", user: "admin_01", action: "Update Threshold", target: "Model_v3", time: "2024-06-30 12:00", status: "Success" },
    { id: "L-1025", user: "system_bot", action: "Data Retraining", target: "TXN_LOG_BATCH", time: "2024-06-30 11:30", status: "In Process" },
]

export default function AuditLogsPage() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col pb-8">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="px-4 lg:px-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                                        <IconHistory className="h-6 w-6" />
                                        Audit Logs
                                    </h1>
                                    <p className="text-muted-foreground">Traceability and compliance history for all system and admin actions.</p>
                                </div>
                                <Button variant="outline">
                                    <IconDownload className="mr-2 h-4 w-4" />
                                    PDF Report
                                </Button>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative flex-1 group">
                                    <IconCalendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <Input placeholder="Select Date Range..." className="pl-8" />
                                </div>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="Action Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Actions</SelectItem>
                                        <SelectItem value="block">Blocks</SelectItem>
                                        <SelectItem value="allow">Manual Allows</SelectItem>
                                        <SelectItem value="config">Config Changes</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button>Apply Filter</Button>
                            </div>

                            <ScrollArea className="h-[500px] border rounded-md">
                                <Table>
                                    <TableHeader className="bg-muted/50 sticky top-0">
                                        <TableRow>
                                            <TableHead>Log ID</TableHead>
                                            <TableHead>Acting User</TableHead>
                                            <TableHead>Action</TableHead>
                                            <TableHead>Target Entity</TableHead>
                                            <TableHead>Timestamp</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {logs.map((log) => (
                                            <TableRow key={log.id}>
                                                <TableCell className="font-mono text-xs text-muted-foreground">{log.id}</TableCell>
                                                <TableCell className="font-semibold">{log.user}</TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className="font-normal">{log.action}</Badge>
                                                </TableCell>
                                                <TableCell className="font-mono text-xs">{log.target}</TableCell>
                                                <TableCell className="text-muted-foreground text-xs">{log.time}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-1.5">
                                                        <div className={`h-1.5 w-1.5 rounded-full ${log.status === 'Success' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                                                        <span className="text-xs font-medium">{log.status}</span>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

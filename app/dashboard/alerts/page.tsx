"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IconAlertCircle, IconCheck, IconShieldX, IconHistory } from "@tabler/icons-react"
import { Separator } from "@/components/ui/separator"

const alerts = [
    {
        id: "ALRT-001",
        txnId: "TXN_9422",
        riskScore: 85,
        reason: "Unusual location (Latvia) for user frequenting London",
        status: "Pending",
        time: "2 mins ago"
    },
    {
        id: "ALRT-002",
        txnId: "TXN_9424",
        riskScore: 98,
        reason: "Large transfer to new beneficiary, exceeded account limit",
        status: "Flagged",
        time: "15 mins ago"
    },
    {
        id: "ALRT-003",
        txnId: "TXN_9410",
        riskScore: 72,
        reason: "Velocity check: 5 transactions in 2 minutes",
        status: "Pending",
        time: "1 hour ago"
    }
]

export default function AlertsPage() {
    const [selectedAlert, setSelectedAlert] = React.useState<any>(null)

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
                                    <h1 className="text-2xl font-bold tracking-tight text-destructive flex items-center gap-2">
                                        <IconAlertCircle className="h-6 w-6" />
                                        Fraud Alerts
                                    </h1>
                                    <p className="text-muted-foreground">Immediate action required for high-risk detected events.</p>
                                </div>
                                <Badge variant="destructive" className="px-3 py-1">5 Critical Alerts</Badge>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3 mb-6 font-medium">
                                <Card className="bg-destructive/5 border-destructive/20">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm">High Risk Alerts</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl">12</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-amber-500/5 border-amber-500/20">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm">Medium Risk Alerts</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl">24</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-emerald-500/5 border-emerald-500/20">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm">Resolved Today</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl">158</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="rounded-md border overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-muted/50">
                                        <TableRow>
                                            <TableHead>Alert ID</TableHead>
                                            <TableHead>Risk Score</TableHead>
                                            <TableHead>Primary Reason</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Detected</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {alerts.map((alert) => (
                                            <Dialog key={alert.id}>
                                                <DialogTrigger asChild>
                                                    <TableRow
                                                        className="cursor-pointer hover:bg-muted/30 transition-colors"
                                                        onClick={() => setSelectedAlert(alert)}
                                                    >
                                                        <TableCell className="font-mono font-bold text-xs">{alert.id}</TableCell>
                                                        <TableCell>
                                                            <Badge variant="destructive" className={`${alert.riskScore > 90 ? 'animate-pulse' : ''}`}>
                                                                {alert.riskScore}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="max-w-[300px] truncate">{alert.reason}</TableCell>
                                                        <TableCell>
                                                            <Badge variant="outline">{alert.status}</Badge>
                                                        </TableCell>
                                                        <TableCell className="text-muted-foreground">{alert.time}</TableCell>
                                                        <TableCell className="text-right whitespace-nowrap">
                                                            <Button variant="ghost" size="sm">Investigate</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[600px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="flex items-center gap-2">
                                                            <IconAlertCircle className="text-destructive" />
                                                            Alert Details: {alert.id}
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Detailed analysis and model explanation for this detected fraud attempt.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <span className="text-sm font-semibold">Transaction:</span>
                                                            <span className="col-span-3 font-mono">{alert.txnId}</span>
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <span className="text-sm font-semibold">Risk Engine:</span>
                                                            <span className="col-span-3">Neuro-Symbolic Hybrid (v2.4)</span>
                                                        </div>
                                                        <Separator className="col-span-4" />
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-sm font-semibold">Anomaly Description:</span>
                                                            <p className="text-sm bg-muted p-3 rounded-md border italic">
                                                                "{alert.reason}"
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-sm font-semibold">Action History:</span>
                                                            <div className="space-y-2 border-l-2 border-muted ml-2 pl-4">
                                                                <div className="text-xs text-muted-foreground flex items-center justify-between">
                                                                    <span>Automated Block Triggered</span>
                                                                    <span>{alert.time}</span>
                                                                </div>
                                                                <div className="text-xs text-muted-foreground flex items-center justify-between">
                                                                    <span>System notification sent to agent</span>
                                                                    <span>Just now</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DialogFooter className="gap-2 sm:gap-0">
                                                        <Button variant="outline" className="flex-1 sm:flex-none">
                                                            <IconCheck className="mr-2 h-4 w-4" />
                                                            Dismiss
                                                        </Button>
                                                        <Button variant="outline" className="flex-1 sm:flex-none">
                                                            <IconHistory className="mr-2 h-4 w-4" />
                                                            Escalated
                                                        </Button>
                                                        <Button variant="destructive" className="flex-1 sm:flex-none font-bold">
                                                            <IconShieldX className="mr-2 h-4 w-4" />
                                                            Freeze Account
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

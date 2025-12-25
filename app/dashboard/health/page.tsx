"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"
import { IconActivity, IconCpu, IconServer, IconDatabase } from "@tabler/icons-react"

const latencyData = [
    { time: "14:00", p99: 120, avg: 45 },
    { time: "14:05", p99: 135, avg: 48 },
    { time: "14:10", p99: 125, avg: 42 },
    { time: "14:15", p99: 240, avg: 55 },
    { time: "14:20", p99: 110, avg: 40 },
    { time: "14:25", p99: 115, avg: 38 },
]

export default function SystemHealthPage() {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

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
                                        <IconActivity className="h-6 w-6 text-emerald-500" />
                                        System Health
                                    </h1>
                                    <p className="text-muted-foreground">Real-time monitoring of inference latency and infrastructure load.</p>
                                </div>
                                <Badge variant="outline" className="text-emerald-500 bg-emerald-500/5 border-emerald-500/10">
                                    All Systems Operational
                                </Badge>
                            </div>

                            <div className="grid gap-6 md:grid-cols-4 mb-6">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Inference Load</CardTitle>
                                        <IconCpu className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">42%</div>
                                        <Progress value={42} className="h-2 mt-2" />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">API Throughput</CardTitle>
                                        <IconServer className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">1.2k rps</div>
                                        <div className="text-xs text-muted-foreground mt-1 text-emerald-500 font-medium">Stable</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">DB Connection</CardTitle>
                                        <IconDatabase className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">14ms</div>
                                        <div className="text-xs text-muted-foreground mt-1 text-emerald-500 font-medium">Optimal</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                                        <IconActivity className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">99.998%</div>
                                        <div className="text-xs text-muted-foreground mt-1 text-emerald-500 font-medium text-nowrap">Last incident: 42 days ago</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid gap-6 md:grid-cols-12">
                                <Card className="md:col-span-8">
                                    <CardHeader>
                                        <CardTitle>Inference Latency (ms)</CardTitle>
                                        <CardDescription>P99 vs Average model execution time</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {isLoading ? (
                                            <Skeleton className="h-[300px] w-full" />
                                        ) : (
                                            <ChartContainer config={{ p99: { label: "P99", color: "#f43f5e" }, avg: { label: "Avg", color: "#10b981" } }} className="h-[300px] w-full">
                                                <AreaChart data={latencyData}>
                                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                                    <XAxis dataKey="time" hide />
                                                    <YAxis tickLine={false} axisLine={false} />
                                                    <ChartTooltip content={<ChartTooltipContent />} />
                                                    <Area type="step" dataKey="p99" fill="var(--color-p99)" fillOpacity={0.1} stroke="var(--color-p99)" />
                                                    <Area type="monotone" dataKey="avg" fill="var(--color-avg)" fillOpacity={0.1} stroke="var(--color-avg)" />
                                                </AreaChart>
                                            </ChartContainer>
                                        )}
                                    </CardContent>
                                </Card>

                                <Card className="md:col-span-4">
                                    <CardHeader>
                                        <CardTitle>Service Registry</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { name: "Auth Gateway", status: "Healthy" },
                                            { name: "Risk Engine", status: "Healthy" },
                                            { name: "Feature Store", status: "Healthy" },
                                            { name: "Logging Pipeline", status: "Degraded" },
                                        ].map((service) => (
                                            <div key={service.name} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                                <span className="text-sm font-medium">{service.name}</span>
                                                <Badge
                                                    variant={service.status === 'Healthy' ? 'outline' : 'destructive'}
                                                    className={service.status === 'Healthy' ? 'border-emerald-500/20 text-emerald-600 bg-emerald-500/5' : ''}
                                                >
                                                    {service.status}
                                                </Badge>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

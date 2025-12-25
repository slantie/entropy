"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { IconHandStop, IconShieldCheck, IconLock, IconBolt, IconRobot, IconUserCircle } from "@tabler/icons-react"

export default function ActionsPage() {
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
                                    <h1 className="text-2xl font-bold tracking-tight">Admin Actions</h1>
                                    <p className="text-muted-foreground">Configure enforcement policies and manual intervention controls.</p>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <Card className="border-emerald-500/20 shadow-sm overflow-hidden">
                                    <CardHeader className="bg-emerald-500/5">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2">
                                                <IconShieldCheck className="text-emerald-600" />
                                                Allow Policy
                                            </CardTitle>
                                            <Badge variant="outline" className="text-emerald-600 bg-white dark:bg-black">Standard</Badge>
                                        </div>
                                        <CardDescription>Rules for instantly approving transactions</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-4 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label>Known Whitelist</Label>
                                                <p className="text-xs text-muted-foreground">Always allow from trusted merchants</p>
                                            </div>
                                            <Switch checked />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label>Small Amount bypass</Label>
                                                <p className="text-xs text-muted-foreground">Force allow transactions under $5.00</p>
                                            </div>
                                            <Switch />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="bg-muted/30 border-t py-3">
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <IconRobot className="h-3 w-3" /> Automated Execution Active
                                        </span>
                                    </CardFooter>
                                </Card>

                                <Card className="border-amber-500/20 shadow-sm overflow-hidden">
                                    <CardHeader className="bg-amber-500/5">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2">
                                                <IconBolt className="text-amber-600" />
                                                Step-Up Auth
                                            </CardTitle>
                                            <Badge variant="outline" className="text-amber-600 bg-white dark:bg-black">Active</Badge>
                                        </div>
                                        <CardDescription>Trigger additional verification (MFA, SMS)</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-4 space-y-4">
                                        <ToggleGroup type="multiple" className="justify-start gap-2">
                                            <ToggleGroupItem value="sms" className="text-xs px-2 h-8">SMS-OTP</ToggleGroupItem>
                                            <ToggleGroupItem value="app" className="text-xs px-2 h-8">App Push</ToggleGroupItem>
                                            <ToggleGroupItem value="call" className="text-xs px-2 h-8" disabled>Voice Call</ToggleGroupItem>
                                        </ToggleGroup>
                                        <div className="p-3 rounded-md bg-amber-500/5 border border-amber-500/10 text-xs italic text-amber-700 dark:text-amber-300">
                                            Triggered when risk score is between 60 and 80.
                                        </div>
                                    </CardContent>
                                    <CardFooter className="bg-muted/30 border-t py-3">
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <IconUserCircle className="h-3 w-3" /> Admin supervised
                                        </span>
                                    </CardFooter>
                                </Card>

                                <Card className="border-destructive/20 shadow-sm overflow-hidden">
                                    <CardHeader className="bg-destructive/5">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2 text-destructive">
                                                <IconHandStop />
                                                Block Transaction
                                            </CardTitle>
                                            <Badge variant="destructive" className="animate-pulse">Emergency</Badge>
                                        </div>
                                        <CardDescription>Immediate cessation of payments for high-risk matches</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-4 space-y-4">
                                        <div className="flex flex-col gap-2">
                                            <Label className="text-xs">Block Level</Label>
                                            <ToggleGroup type="single" defaultValue="temp" className="justify-start gap-2">
                                                <ToggleGroupItem value="temp" className="text-xs px-2 h-8">Terminal Only</ToggleGroupItem>
                                                <ToggleGroupItem value="channel" className="text-xs px-2 h-8">Channel-Wide</ToggleGroupItem>
                                                <ToggleGroupItem value="hard" className="text-xs px-2 h-8 bg-destructive text-white border-none">Hard Block</ToggleGroupItem>
                                            </ToggleGroup>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-black/20 shadow-sm overflow-hidden bg-slate-100/30 dark:bg-slate-900/10">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2">
                                                <IconLock />
                                                Freeze Account
                                            </CardTitle>
                                            <Badge variant="secondary">Regulatory</Badge>
                                        </div>
                                        <CardDescription>Complete account lock for suspicious activity</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Requires 2-factor Admin approval. Impact: All debit/credit cards, ATM access, and online transfers.
                                        </p>
                                        <Button variant="outline" className="w-full">Initialize Freeze Protocol</Button>
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

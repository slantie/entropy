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
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { IconSettings, IconBell, IconShieldCheck, IconKey } from "@tabler/icons-react"

export default function SettingsPage() {
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
                                    <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                                    <p className="text-muted-foreground">Admin console and system configuration.</p>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <IconShieldCheck className="h-5 w-5" />
                                            Risk Thresholds
                                        </CardTitle>
                                        <CardDescription>Global sensitivity levels for the fraud detection engine.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="low-risk">Low Risk Limit ($)</Label>
                                                <Input id="low-risk" defaultValue="500" type="number" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="critical-threshold">Critical Risk Score Threshold</Label>
                                                <Input id="critical-threshold" defaultValue="90" type="number" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label>Global Learning Mode</Label>
                                                <p className="text-xs text-muted-foreground">Allow model to update weights based on manual overrides in real-time.</p>
                                            </div>
                                            <Switch checked />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="border-t bg-muted/20 py-3 justify-end">
                                        <Button size="sm">Update Engine</Button>
                                    </CardFooter>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <IconBell className="h-5 w-5" />
                                            Notification Preferences
                                        </CardTitle>
                                        <CardDescription>Configure how alerts are communicated to the analyst team.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <Label>Critical Alert Push</Label>
                                            <Switch checked />
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between">
                                            <Label>Daily Summary Email</Label>
                                            <Switch />
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between">
                                            <Label>Slack / Webhook Integration</Label>
                                            <Switch checked />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-destructive/20 shadow-none bg-destructive/5">
                                    <CardHeader>
                                        <CardTitle className="text-destructive flex items-center gap-2">
                                            <IconKey className="h-5 w-5" />
                                            Emergency Override
                                        </CardTitle>
                                        <CardDescription>Panic controls for total system lockdown or fail-through.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-4">
                                            <Button variant="destructive" className="flex-1">FAIL TO BLOCK</Button>
                                            <Button variant="outline" className="flex-1">FAIL TO ALLOW</Button>
                                        </div>
                                        <p className="text-[10px] text-destructive mt-3 text-center uppercase tracking-tighter font-bold">
                                            WARNING: THIS OVERRIDES ALL MACHINE LEARNING MODELS
                                        </p>
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

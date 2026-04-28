"use client";

import {
    CustomButton,
    CustomButtonGroup,
    CustomCard,
    CustomAvatar,
    CustomBadge,
    CustomBreadcrumbs,
    CustomAccordion,
    CustomAlert,
    CustomAlertDialog,
    CustomAutocomplete,
    CustomCalendar,
    CustomCheckbox,
    CustomChip,
    CustomDatePicker,
    CustomInput,
    CustomInputGroup,
    CustomLabel,
    CustomDescription,
    CustomCloseButton,
} from "@/components/ui";
import {
    Heart,
    Bell,
    Mail,
    Star,
} from "lucide-react";
import { Accordion, Autocomplete, Breadcrumbs, ListBox, Tabs } from "@heroui/react";

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-[#fffcfd] pb-20">
            {/* Header */}
            <header className="bg-white border-b border-pink-100 py-12 px-6 mb-12">
                <div className="max-w-6xl mx-auto">
                    <CustomBreadcrumbs className="mb-4">
                        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item>Component Gallery</Breadcrumbs.Item>
                    </CustomBreadcrumbs>
                    <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-2">
                        UI Component <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        A showcase of all custom components built for the Tinder Social Network.
                        Designed with a feminine aesthetic using HeroUI v3.
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 space-y-16">

                {/* Buttons Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">Buttons & Actions</h2>
                    </div>
                    <CustomCard className="p-8 border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">Variants</h3>
                                <div className="flex flex-wrap gap-4">
                                    <CustomButton variant="primary">Primary Button</CustomButton>
                                    <CustomButton variant="secondary">Secondary</CustomButton>
                                    <CustomButton variant="outline">Outline</CustomButton>
                                    <CustomButton variant="ghost">Ghost</CustomButton>
                                    <CustomButton variant="danger">Danger</CustomButton>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">With Icons & States</h3>
                                <div className="flex flex-wrap gap-4">
                                    <CustomButton variant="primary">
                                        <Heart className="w-4 h-4" />
                                        Like
                                    </CustomButton>
                                    <CustomButton variant="secondary" isIconOnly>
                                        <Bell className="w-5 h-5" />
                                    </CustomButton>
                                    <CustomButton isPending variant="primary">Loading</CustomButton>
                                    <CustomButtonGroup>
                                        <CustomButton variant="outline">Left</CustomButton>
                                        <CustomButton variant="outline">Middle</CustomButton>
                                        <CustomButton variant="outline">Right</CustomButton>
                                    </CustomButtonGroup>
                                </div>
                            </div>
                        </div>
                    </CustomCard>
                </section>

                {/* Feedback Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">Feedback & Status</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <CustomAlert status="success">
                                <CustomAlert.Indicator />
                                <CustomAlert.Content>
                                    <CustomAlert.Title>Success!</CustomAlert.Title>
                                    <CustomAlert.Description>Your profile has been updated successfully.</CustomAlert.Description>
                                </CustomAlert.Content>
                            </CustomAlert>
                            <CustomAlert status="warning">
                                <CustomAlert.Indicator />
                                <CustomAlert.Content>
                                    <CustomAlert.Title>Warning</CustomAlert.Title>
                                    <CustomAlert.Description>Please complete your profile to get more matches.</CustomAlert.Description>
                                </CustomAlert.Content>
                            </CustomAlert>
                            <div className="flex flex-wrap gap-4">
                                <CustomBadge.Anchor>
                                    <CustomButton variant="outline">Notifications</CustomButton>
                                    <CustomBadge color="accent">New</CustomBadge>
                                </CustomBadge.Anchor>
                                <CustomBadge.Anchor>
                                    <CustomAvatar>
                                        <CustomAvatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                        <CustomAvatar.Fallback>RH</CustomAvatar.Fallback>
                                    </CustomAvatar>
                                    <CustomBadge color="danger">5</CustomBadge>
                                </CustomBadge.Anchor>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3">
                                <CustomChip variant="soft" color="accent">Fashion</CustomChip>
                                <CustomChip variant="soft" color="success">Online</CustomChip>
                                <CustomChip variant="secondary" color="accent">
                                    Travel
                                    <CustomCloseButton className="ml-1 w-4 h-4 p-0.5" />
                                </CustomChip>
                                <CustomChip variant="primary" color="danger">
                                    <Star className="w-3 h-3" />
                                    VIP
                                </CustomChip>
                            </div>
                            <CustomAccordion allowsMultipleExpanded>
                                <Accordion.Item key="1">
                                    <Accordion.Heading>
                                        <Accordion.Trigger>Community Guidelines</Accordion.Trigger>
                                    </Accordion.Heading>
                                    <Accordion.Panel>
                                        <Accordion.Body>
                                            Be kind, respectful, and genuine with others.
                                        </Accordion.Body>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item key="2">
                                    <Accordion.Heading>
                                        <Accordion.Trigger>Privacy Policy</Accordion.Trigger>
                                    </Accordion.Heading>
                                    <Accordion.Panel>
                                        <Accordion.Body>
                                            We value your privacy and keep your data safe.
                                        </Accordion.Body>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </CustomAccordion>
                        </div>
                    </div>
                </section>

                {/* Form Elements Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">Inputs & Forms</h2>
                    </div>
                    <CustomCard className="p-8 border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <CustomLabel>Email Address</CustomLabel>
                                    <CustomInputGroup>
                                        <CustomInputGroup.Prefix>
                                            <Mail className="w-4 h-4 text-zinc-400" />
                                        </CustomInputGroup.Prefix>
                                        <CustomInputGroup.Input placeholder="Enter your email" />
                                    </CustomInputGroup>
                                    <CustomDescription>We&apos;ll never share your email.</CustomDescription>
                                </div>
                                <div className="space-y-2">
                                    <CustomLabel>Interests</CustomLabel>
                                    <CustomAutocomplete>
                                        <CustomInput placeholder="Search interests..." />
                                        <Autocomplete.Popover>
                                            <ListBox>
                                                <ListBox.Item id="music">Music</ListBox.Item>
                                                <ListBox.Item id="art">Art</ListBox.Item>
                                                <ListBox.Item id="tech">Technology</ListBox.Item>
                                                <ListBox.Item id="sports">Sports</ListBox.Item>
                                            </ListBox>
                                        </Autocomplete.Popover>
                                    </CustomAutocomplete>
                                </div>
                                <CustomCheckbox>I agree to the terms and conditions</CustomCheckbox>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <CustomLabel>Birth Date</CustomLabel>
                                    <CustomDatePicker />
                                </div>
                                <div className="space-y-2">
                                    <CustomLabel>Availability</CustomLabel>
                                    <div className="border border-pink-100 rounded-2xl p-2 bg-white">
                                        <CustomCalendar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomCard>
                </section>

                {/* Cards & Layout Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">Cards & Profile</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Profile Card */}
                        <CustomCard className="border-pink-50 overflow-hidden group">
                            <div className="h-24 bg-gradient-to-r from-pink-200 to-primary/30" />
                            <div className="px-6 pb-6 -mt-10 flex flex-col items-center text-center">
                                <CustomAvatar className="w-20 h-20 border-4 border-white shadow-md mb-3">
                                    <CustomAvatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    <CustomAvatar.Fallback>RH</CustomAvatar.Fallback>
                                </CustomAvatar>
                                <h3 className="font-bold text-zinc-800">Rose Henderson</h3>
                                <p className="text-xs text-zinc-500 mb-4">Designer • New York</p>
                                <div className="flex gap-2 w-full">
                                    <CustomButton variant="primary" className="flex-1" size="sm">Follow</CustomButton>
                                    <CustomButton variant="outline" className="flex-1" size="sm">Message</CustomButton>
                                </div>
                            </div>
                        </CustomCard>

                        {/* Info Card */}
                        <CustomCard className="col-span-1 md:col-span-2 border-pink-50 p-6">
                            <Tabs aria-label="Options" variant="primary">
                                <Tabs.List>
                                    <Tabs.Tab id="photos">Photos</Tabs.Tab>
                                    <Tabs.Tab id="interests">Interests</Tabs.Tab>
                                    <Tabs.Tab id="bio">Bio</Tabs.Tab>
                                </Tabs.List>
                                <Tabs.Panel id="photos">
                                    <div className="grid grid-cols-3 gap-2 pt-4">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="aspect-square bg-pink-50 rounded-lg overflow-hidden relative group">
                                                <img
                                                    src={`https://i.pravatar.cc/300?u=${i}`}
                                                    alt="Gallery"
                                                    className="object-cover w-full h-full transition-transform group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Tabs.Panel>
                                <Tabs.Panel id="interests">
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        <CustomChip color="accent" variant="soft">Photography</CustomChip>
                                        <CustomChip color="accent" variant="soft">Travel</CustomChip>
                                        <CustomChip color="accent" variant="soft">Yoga</CustomChip>
                                        <CustomChip color="accent" variant="soft">Cooking</CustomChip>
                                        <CustomChip color="accent" variant="soft">Art</CustomChip>
                                    </div>
                                </Tabs.Panel>
                                <Tabs.Panel id="bio">
                                    <p className="text-zinc-600 text-sm pt-4 leading-relaxed">
                                        Exploring the world one coffee shop at a time.
                                        Love minimal design, sunset walks, and deep conversations.
                                        Always looking for new inspiration!
                                    </p>
                                </Tabs.Panel>
                            </Tabs>
                        </CustomCard>
                    </div>
                </section>

                {/* Overlays Section */}
                <section className="pb-20">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">Modals & Overlays</h2>
                    </div>
                    <CustomCard className="p-8 border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm flex justify-center gap-8">
                        <CustomAlertDialog>
                            <CustomAlertDialog.Trigger>
                                <CustomButton variant="danger">Open Dialog</CustomButton>
                            </CustomAlertDialog.Trigger>
                            <CustomAlertDialog.Backdrop>
                                <CustomAlertDialog.Dialog>
                                    <CustomAlertDialog.Header>
                                        <h3 className="text-xl font-bold">Deactivate Account</h3>
                                    </CustomAlertDialog.Header>
                                    <div className="px-6 py-4">
                                        <p className="text-zinc-500">
                                            Are you sure you want to deactivate your account? This action cannot be undone.
                                        </p>
                                    </div>
                                    <CustomAlertDialog.Footer>
                                        <CustomButton variant="ghost">Cancel</CustomButton>
                                        <CustomButton variant="danger">Deactivate</CustomButton>
                                    </CustomAlertDialog.Footer>
                                </CustomAlertDialog.Dialog>
                            </CustomAlertDialog.Backdrop>
                        </CustomAlertDialog>

                        <CustomButton variant="outline" onClick={() => alert("Modal would open here")}>
                            Open Profile Modal
                        </CustomButton>
                    </CustomCard>
                </section>
            </main>

            {/* Footer decoration */}
            <footer className="text-center text-zinc-400 text-sm py-10 border-t border-pink-50">
                <p>© 2026 Tinder Social Network UI Kit</p>
            </footer>
        </div>
    );
}

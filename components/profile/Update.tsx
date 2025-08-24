"use client"

import { Card } from "../ui/card";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Button } from "../ui/button";
import Link from "next/link";
import { Textarea } from "../ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Accordion } from "@mantine/core";
import { useState } from "react";

export default function UpdateProfile() {
    const [socialLinks, setSocialLinks] = useState([
        { platform: "", url: "" },
    ]);

    // Add new empty set
    const handleAdd = () => {
        setSocialLinks([...socialLinks, { platform: "", url: "" }]);
    };

    const handleRemove = (indexToRemove: number) => {
        setSocialLinks(socialLinks.filter((_, i) => i !== indexToRemove));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hello");
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            // Update state to preview image
            console.log("Selected file:", file);
            // Example: setPreview(previewUrl);
        }
    };

    return (
        <section className="flex justify-center" style={{ alignItems: "center", minHeight: "calc(100vh)" }}>
            <Card className="container mx-auto flex px-2 py-2 m-5 flex-row max-w-[700]">
                <div className="w-full flex flex-col justify-between">
                    {/* <Link href="/" className="font-semibold text-lg hidden md:block" style={{ color: "hsl(0, 0%, 8%)" }}>GLEC</Link> */}

                    <div className="p-2 md:pt-5 flex flex-col gap-2">
                        <h2 className="text-center font-semibold text-4xl" style={{ color: "hsl(0, 0%, 8%)" }}>My Profile</h2>
                        <Accordion chevronPosition="left" variant="separated" chevronSize={25} defaultValue="profile">
                            <Accordion.Item value="profile">
                                <Accordion.Control><span className="font-semibold">Update Profile</span></Accordion.Control>
                                <Accordion.Panel>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">                                
                                            <Label className="text-2xl" htmlFor="profile">Profile Photo</Label>
                                            <div className="relative w-24 h-24 group">
                                                <label htmlFor="avatarUpload" className="cursor-pointer block w-full h-full">   
                                                    <img src="/smm.jpg" alt="Profile Photo" className="w-full h-full rounded-full object-cover border-2 border-gray-300 absolute top-0" />
                                                    <span className="absolute bottom-0 flex justify-center w-full items-center text-5xl font-bold p-0" style={{ backgroundColor: "rgba(255, 255, 255, .8)" }}>+</span>
                                                </label>
                                                <Input className="hidden" type="file" id="avatarUpload" name="profile" accept="image/*" onChange={(e) => handleAvatarChange(e)} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="background">Background Photo</Label>
                                            <div className="relative w-full h-24 group">                                
                                                <img src="/smm.jpg" alt="Profile Photo" className="w-full h-full rounded-md object-cover border-2 border-gray-300" />
                                                <Input className="hidden" type="file" id="avatarUpload" name="background" accept="image/*" onChange={(e) => handleAvatarChange(e)} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="fullname">Full Name</Label>
                                            <Input className="rounded-md" type="text" name="fullname" placeholder="Enter Full Name" />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="username">Username</Label>
                                            <Input className="rounded-md" type="text" name="username" placeholder="Enter Username" />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="about">About</Label>
                                            <Textarea className="rounded-md" name="about" placeholder="Enter short description about yourself" />
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="contact">
                                <Accordion.Control><span className="font-semibold">Contact Info</span></Accordion.Control>
                                <Accordion.Panel>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="email">Email Address</Label>
                                            <Input className="rounded-md" type="email" name="email" placeholder="Enter Email Address" />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="email">Phone Number</Label>
                                            <Input className="rounded-md" type="text" name="email" placeholder="Enter Email Address" />
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="media">
                                <Accordion.Control><span className="font-semibold">Social Media Links</span></Accordion.Control>
                                <Accordion.Panel>
                                    <div className="space-y-6">
                                        {socialLinks.map((_: any, index: number) => (
                                            <div key={index} className="flex flex-col gap-4">
                                                <div className="flex flex-col">
                                                    <Label className="text-2xl" htmlFor="sm">Social Media Account</Label>
                                                    <Select>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Social Media" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem  className="text-2xl" value="ig">Instagram</SelectItem>
                                                            <SelectItem  className="text-2xl" value="fb">Facebook</SelectItem>
                                                            <SelectItem  className="text-2xl" value="tt">Tiktok</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                
                                                <div className="flex flex-col">
                                                    <Label className="text-2xl" htmlFor="url[]">Link</Label>
                                                    <Input className="rounded-md" type="text" name="url[]" placeholder="https://www.example.com" />
                                                </div>
                                             
                                                {/* Remove Button */}
                                                {socialLinks.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemove(index)}
                                                        className="text-sm border-2 text-[#990033] border-[#990033] rounded-md"
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                        ))}

                                        {/* Add Button */}
                                        <button
                                            type="button"
                                            onClick={handleAdd}
                                            className="px-4 py-1 bg-[#0057b7] text-white rounded-md hover:bg-blue-800"
                                        >
                                            + Add Account
                                        </button>
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>

                        <div>
                            <Input className="rounded-xl" style={{ background: "hsl(0, 0%, 8%)", color: "#fff", cursor: "pointer" }} type="submit" value="Update" />
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}
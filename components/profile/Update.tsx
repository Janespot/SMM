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
import { memo, useCallback, useEffect, useState } from "react";
import links from "@/assets/json/social-media.json";
import { Switch } from "../ui/switch";

const SocialLinkItem = memo(({ link, index, onPlatformChange, onUrlChange, onPrivacyChange, onRemove, canRemove }) => {
    const [privacy, setPrivacy] = useState(link.privacy);

    // useEffect(() => {
    //     console.log("privacy", privacy)
    // }, [privacy, setPrivacy])

    return (
        <>
            <div className="flex flex-col gap-4">
                <Label className="text-2xl" htmlFor="sm">Social Media Account</Label>
                <Select
                    value={link?.platform}
                    onValueChange={value => onPlatformChange(index, value)}
                >
                    <SelectTrigger className="w-full text-[#777777] bg-white">
                        <SelectValue placeholder="Social Media" />
                    </SelectTrigger>
                    <SelectContent>
                        {links.sort((a, b)=> a.label.localeCompare(b.label)).map(link => (
                            <SelectItem  className="text-2xl" value={link.value}>{link.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
                                                
            <div className="flex flex-col">
                <Label className="text-2xl" htmlFor="url[]">Link</Label>
                <Input 
                    className="rounded-md text-[#777777] bg-white" 
                    type="text" 
                    name="url[]" 
                    placeholder="https://www.example.com" 
                    value={link.url}
                    onChange={e => onUrlChange(index, e.target.value)}
                />
            </div>
            
            <div className="flex justify-between">
                <div className="flex items-center justify-start w-2/3 gap-1">
                    <Switch id={`privacy-${index}`} checked={link.privacy} className="data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-blue-500 cursor-pointer" onCheckedChange={checked => onPrivacyChange(index, checked)} />
                    <Label htmlFor="privacy" className="text-2xl">Make Private</Label>
                </div>
                
                {/* {/* Remove Button  */}
                {canRemove && (
                    <button
                        type="button"
                        onClick={() => onRemove(index)}
                        className="text-sm border-2 text-[#990033] border-[#990033] rounded-md w-1/3 bg-white cursor-pointer"
                    >
                        Remove
                    </button>
                )}
            </div>
        </>
    )
})

export default function UpdateProfile({ initialDataProfile, initialDataSocial } : any) {
    const [profile, setProfile] = useState<any>(initialDataProfile ? {
        profile: initialDataProfile.profile || "",
        background: initialDataProfile.background || "",
        username: initialDataProfile.username || "",
        about: initialDataProfile.about || ""
    } : {
        profile: "",
        background: "",
        username: "",
        about: ""
    });

    const [contact, setContact] = useState<any>(initialDataProfile ? {
        phonenumber: initialDataProfile.phonenumber || "",
    } : {
            phonenumber: ""
    });
    const [sociallinks, setSociallinks] = useState(initialDataSocial || [
        {platform: "", url: "", privacy: false}
    ]);
    

    // console.log("pf data2",profile, contact, sociallinks, initialDataProfile, initialDataSocial);
    const updatePlatform = useCallback((index, platform) => {
        setSociallinks(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], platform };
            return updated;
        });
    }, []);

    const updateUrl = useCallback((index, url) => {
        setSociallinks(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], url };
            return updated;
        });
    }, []);

    const updatePrivacy = (index: number, value: boolean) => {
        setSociallinks((prev) => {
            const updated = [...prev];
            updated[index] = {
            ...updated[index],
            privacy: value,
            };
            return updated;
        });
    };

    // Add new empty set
    const handleAdd = () => {
        setSociallinks([...sociallinks, { platform: "", url: "" }]);
    };

    const handleRemove = (indexToRemove: number) => {
        setSociallinks(sociallinks.filter((_, i) => i !== indexToRemove));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            // Update state to preview image
            console.log("Selected file:", file);
            // Example: setPreview(previewUrl);
        }
    };

    const handleUpdate = async () => {
        const ProfileBody = {
            profile: {...profile, ...contact},
            sociallinks: sociallinks
        };

        const res = await fetch("/api/updatemyprofile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ProfileBody)
        });
    }

    // useEffect(() => {
    //     console.log("profile", profile, contact, sociallinks);
    // }, [profile, setProfile, contact, setContact, sociallinks, setSociallinks])

    return (
        <section className="flex justify-center" style={{ alignItems: "center", minHeight: "calc(100vh)" }}>
            <Card className="container mx-auto flex px-2 py-2 m-5 flex-row max-w-[700]">
                <div className="w-full flex flex-col justify-between">

                    <div className="p-2 md:pt-5 flex flex-col gap-2">
                        <h2 className="text-center font-semibold text-4xl" style={{ color: "hsl(0, 0%, 8%)" }}>My Profile</h2>
                        <Accordion chevronPosition="left" variant="separated" chevronSize={25} defaultValue="profile">
                            <Accordion.Item value="profile">
                                <Accordion.Control><span className="font-semibold">Update Profile</span></Accordion.Control>
                                <Accordion.Panel>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">                                
                                            <Label className="text-2xl" htmlFor="profile.profile">Profile Photo</Label>
                                            <div className="relative w-24 h-24 group">
                                                <label htmlFor="avatarUpload" className="cursor-pointer block w-full h-full">   
                                                    <img src="/smm.jpg" alt="Profile Photo" className="w-full h-full rounded-full object-cover border-2 border-gray-300 absolute top-0" />
                                                    <span className="absolute bottom-0 flex justify-center w-full items-center text-5xl font-bold p-0" style={{ backgroundColor: "rgba(255, 255, 255, .8)" }}>+</span>
                                                </label>
                                                <Input 
                                                    className="hidden" 
                                                    type="file" 
                                                    id="avatarUpload" 
                                                    name="profile.profile" 
                                                    accept="image/*" 
                                                    onChange={(e) => handleAvatarChange(e)} 
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="profile.background">Background Photo</Label>
                                            <div className="relative w-full h-24 group">                                
                                                <img src="/smm.jpg" alt="Profile Photo" className="w-full h-full rounded-md object-cover border-2 border-gray-300" />
                                                <Input className="hidden" type="file" id="avatarUpload" name="profile.background" accept="image/*" onChange={(e) => handleAvatarChange(e)} />
                                            </div>
                                        </div> */}

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="profile.fullname">Full Name</Label>
                                            <Input 
                                                className="rounded-md text-[#777777]" 
                                                type="text" 
                                                name="profile.fullname" 
                                                placeholder="Enter Full Name" 
                                                disabled
                                                style={{ cursor: "not-allowed" }}
                                                value={profile.fullname}
                                                onChange={e => 
                                                    setProfile((prev: any) => ({
                                                        ...prev,
                                                        fullname: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="profile.username">Username</Label>
                                            <Input 
                                                className="rounded-md text-[#777777]" 
                                                type="text" 
                                                name="profile.username" 
                                                placeholder="Enter Username" 
                                                value={profile.username}
                                                onChange={e => 
                                                    setProfile((prev: any) => ({
                                                        ...prev,
                                                        username: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="profile.about">About</Label>
                                            <Textarea 
                                                className="rounded-md text-[#777777]" 
                                                name="profile.about" 
                                                placeholder="Enter short description about yourself" 
                                                value={profile.about}
                                                onChange={e => 
                                                    setProfile((prev: any) => ({
                                                        ...prev,
                                                        about: e.target.value,
                                                    }))
                                                }
                                            />
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
                                            <Input 
                                                className="rounded-md text-[#777777]" 
                                                type="email" 
                                                name="email" 
                                                placeholder="Enter Email Address" 
                                                disabled
                                                style={{ cursor: "not-allowed" }}
                                                value={contact.email}
                                                onChange={e => 
                                                    setContact((prev: any) => ({
                                                        ...prev,
                                                        email: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <Label className="text-2xl" htmlFor="phonenumber">Phone Number</Label>
                                            <Input 
                                                className="rounded-md text-[#777777]" 
                                                type="text" 
                                                name="phonenumber" 
                                                placeholder="Enter Phone Number" 
                                                value={contact.phonenumber}
                                                onChange={e => 
                                                    setContact((prev: any) => ({
                                                        ...prev,
                                                        phonenumber: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="media">
                                <Accordion.Control><span className="font-semibold">Social Media Links</span></Accordion.Control>
                                <Accordion.Panel>
                                    <div className="space-y-6">
                                        {sociallinks.map((link: any, index: number) => (
                                            <Card key={index} className="flex flex-col gap-4 p-2 shadow-none bg-[#f2f2f2]">                                                
                                                <SocialLinkItem
                                                    link={link}
                                                    index={index}
                                                    onPlatformChange={updatePlatform}
                                                    onPrivacyChange={updatePrivacy}
                                                    onUrlChange={updateUrl}
                                                    onRemove={handleRemove}
                                                    canRemove={sociallinks.length > 1}
                                                />
                                            </Card>
                                        ))}

                                        {/* {/* Add Button  */}
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
                            <Input className="rounded-xl" style={{ background: "hsl(0, 0%, 8%)", color: "#fff", cursor: "pointer" }} type="submit" value="Update" onClick={handleUpdate} />
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}
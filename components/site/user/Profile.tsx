'use client'

import { Button, Tabs } from "@mantine/core";

export default function UserProfile({ profileData, owner }: any) {
    return (
        <>
            {profileData.map((data: any) => (
                <div className="w-full text-white text-sm">
                    <div>
                        <div className="w-full h-[200px] relative" style={{ backgroundImage: `url('/smm.jpg')` }}></div>
                    </div>
                    
                    <div className="container flex flex-col md:flex-row w-full mx-auto p-2 gap-15 mb-10">
                        <div className="w-[98%] md:w-[49%]">
                            <div className="w-[150px] flex flex-col ml-10 mb-5">
                                <div className="w-[150px] h-[150px] rounded-full" style={{ backgroundImage: `url('/avatar-jessica.jpeg')`, marginTop: "-50%", zIndex: 1, border: "1px solid #555" }}></div>
                                <span className="text-center pt-3 font-semibold text-xl">{data.username}</span>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-3 mb-5">
                                    <div className="flex flex-col">
                                        <span className="font-semibold">1000</span>
                                        <span className="text-xs">followers</span>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="font-semibold">200</span>
                                        <span className="text-xs">following</span>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="font-semibold">10</span>
                                        <span className="text-xs">posts</span>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="font-semibold">1990</span>
                                        <span className="text-xs">points</span>
                                    </div>
                                </div>

                                {owner && (
                                    <Button variant="default" size="xs">
                                        <span className="text-sm">Edit Profile</span>
                                    </Button>
                                )}
                            </div>

                            <Tabs color="teal" defaultValue="first">
                                <Tabs.List>
                                    <Tabs.Tab value="first">
                                        <span className="text-sm font-semibold">Posts</span>
                                    </Tabs.Tab>
                                    <Tabs.Tab value="second" color="blue">
                                        <span className="text-sm font-semibold">Collections</span>
                                    </Tabs.Tab>
                                </Tabs.List>

                                <Tabs.Panel value="first" pt="xs">
                                    No Posts
                                </Tabs.Panel>

                                <Tabs.Panel value="second" pt="xs">
                                    No Collections
                                </Tabs.Panel>
                            </Tabs>
                        </div>

                        <div className="w-[98%] md:w-[49%]">
                            <h4 className="font-semibold">About</h4>
                            <p>{data.about}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
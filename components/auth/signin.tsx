import { Card } from "../ui/card";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Button } from "../ui/button";
import Link from "next/link";

export default function Signin() {
    return (
        <section className="flex justify-center" style={{ alignItems: "center", minHeight: "calc(100vh)", background: "hsl(0, 0%, 8%)" }}>
            <Card className="container mx-auto flex px-2 py-2 m-5 flex-row h-[500px]">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    {/* <Link href="/" className="font-semibold text-lg hidden md:block" style={{ color: "#0057b7" }}>GLEC</Link> */}

                    <div className="p-2 md:pt-5">
                        <h2 className="text-center mb-10 font-semibold text-4xl" style={{ color: "#0057b7" }}>Sign In</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <Label className="text-2xl" htmlFor="email">Email</Label>
                                <Input className="rounded-xl" type="email" name="email" placeholder="Enter Email Address" />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-2xl" htmlFor="password">Password</Label>
                                <Input className="rounded-xl" type="password" name="password" placeholder="Enter Password" />
                            </div>

                            <div>
                                <Input className="rounded-xl" style={{ background: "#0057b7", color: "#fff", cursor: "pointer" }} type="submit" value="Sign In" />
                            </div>

                            <div className="w-full flex justify-between">
                                <Button variant="outline" className="rounded-xl" style={{ width: '49%', cursor: "pointer" }}>
                                    <Image
                                        src={'/apple.png'}
                                        alt="Hero"
                                        width={20}
                                        height={20}
                                        className="rounded-xl"
                                    />
                                    Apple
                                </Button>
                                <Button variant="outline" className="rounded-xl" style={{ width: '49%', cursor: "pointer" }}>
                                    <Image
                                        src={'/google.png'}
                                        alt="Hero"
                                        width={20}
                                        height={20}
                                        className="rounded-xl"
                                    />
                                    Google
                                </Button>
                            </div>
                        </div>
                    </div>

                    <p className="p-2">
                        Don't Have an Account? 
                        &nbsp;<Link href="/signup" style={{ color: "#0057b7", textDecoration: "underline" }}>Sign Up</Link>
                    </p>
                </div>

                <div 
                    className="w-1/2 rounded-lg hidden md:block" 
                    style={{ backgroundImage: "url('/smm.png')", backgroundSize: "cover" }}
                >
                </div>
            </Card>
        </section>
    )
}
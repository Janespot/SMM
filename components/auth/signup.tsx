
'use client'

import { useState } from 'react'
import { signUp } from '@/lib/auth/signup'  // Import your signup function
import { useRouter } from 'next/navigation'
import { Card } from "../ui/card";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Button } from "../ui/button";
import Link from "next/link";

export default function Signup() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        console.log({"email": email, "password": password, "name": name });
        return;
        
        e.preventDefault()
        setLoading(true)
        setError('')
    
        try {
            await signUp(email, password, name);
            alert('Signup successful! Check your email for confirmation.');
            router.push('/signin'); // or wherever you want after signup
        } catch (err: any) {
            console.error(err)
            setError(err.message || 'Something went wrong.')
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section className="flex justify-center" style={{ alignItems: "center", minHeight: "calc(100vh - 60px)", background: "#e6f2ff" }}>
            <Card className="container mx-auto flex px-2 py-2 m-5 flex-row h-[500px]">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    {/* <Link href="/" className="font-semibold text-lg hidden md:block" style={{ color: "#0057b7" }}>GLEC</Link> */}

                    <div className="p-2 md:pt-5">
                        <h2 className="text-center mb-10 font-semibold text-xl" style={{ color: "#0057b7" }}>Create Account</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    className="rounded-xl" 
                                    type="text" 
                                    name="name" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter Full Name" 
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    className="rounded-xl" 
                                    type="email" 
                                    name="email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter Email Address" 
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    className="rounded-xl" 
                                    type="password" 
                                    name="password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Enter Password" 
                                />
                            </div>

                            <div>
                                <Input className="rounded-xl" style={{ background: "#0057b7", color: "#fff", cursor: "pointer" }} type="submit" value={loading ? 'Signing up...' : 'Sign Up'} />
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
                        </form>
                    </div>

                    <p className="text-xs p-2">
                        Already Have an Account? 
                        &nbsp;<Link href="/signin" style={{ color: "#0057b7", textDecoration: "underline" }}>Sign In</Link>
                    </p>
                </div>

                <div 
                    className="w-1/2 rounded-lg hidden md:block" 
                    style={{ backgroundImage: "url('/top2.jpg')", backgroundSize: "cover" }}
                >
                </div>
            </Card>
        </section>
    )
}
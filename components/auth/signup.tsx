
'use client'

import { useState } from 'react'
import { signInWithApple, signInWithGoogle, signUp } from '@/lib/auth/signup'  // Import your signup function
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
        
        e.preventDefault()
        setLoading(true)
        setError('')
    
        try {
            await signUp(email, password, name);
            alert('Signup successful! Check your email for confirmation.');
            router.push('/profile/updateprofile'); // or wherever you want after signup
        } catch (err: any) {
            console.error(err)
            setError(err.message || 'Something went wrong.')
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <section className="flex justify-center" style={{ alignItems: "center", minHeight: "calc(100vh)" }}>
            <Card className="container mx-auto flex px-2 py-2 m-5 flex-row h-[500px] border-none">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div className="p-2 md:pt-5">
                        <h2 className="text-center mb-10 font-semibold text-4xl" style={{ color: "hsl(0, 0%, 8%)" }}>Create Account</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <Label className="text-2xl" htmlFor="name">Full Name</Label>
                                <Input
                                    className="rounded-xl" 
                                    type="text" 
                                    name="name" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter Full Name"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-2xl" htmlFor="email">Email</Label>
                                <Input 
                                    className="rounded-xl" 
                                    type="email" 
                                    name="email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter Email Address" 
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-2xl" htmlFor="password">Password</Label>
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
                                <Input className="rounded-xl" style={{ background: "hsl(0, 0%, 8%)", color: "#fff", cursor: "pointer" }} type="submit" value={loading ? 'Signing up...' : 'Sign Up'} />
                            </div>

                            <div className="w-full flex justify-between">
                                <Button variant="outline" className="rounded-xl" style={{ width: '49%', cursor: "pointer" }} onClick={signInWithApple}>
                                    <Image
                                        src={'/apple.png'}
                                        alt="Hero"
                                        width={20}
                                        height={20}
                                        className="rounded-xl"
                                    />
                                    Apple
                                </Button>
                                <Button variant="outline" className="rounded-xl" style={{ width: '49%', cursor: "pointer" }} onClick={signInWithGoogle}>
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

                    <p className="p-2">
                        Already Have an Account? 
                        &nbsp;<Link href="/signin" style={{ color: "hsl(0, 0%, 8%)", textDecoration: "underline" }}>Sign In</Link>
                    </p>
                </div>

                <div 
                    className="w-1/2 rounded-lg hidden md:block" 
                    style={{ backgroundImage: "url('/smm.jpg')", backgroundSize: "cover" }}
                >
                </div>
            </Card>
        </section>
    )
}
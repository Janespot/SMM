'use client'

import { handleSignOut } from '@/lib/auth/signup';
import Link from 'next/link';

export default function Nav({ session }: any) {
    console.log("session", session);
    return (
        <nav className='container w-full text-white text-xl h-[60px] flex justify-between'>
            <ul style={{ width: "fit-content" }}>
                <li className='empty'>
                    <Link href="/" style={{ fontWeight: "100" }}>SMM</Link>
                </li>
            </ul>

            <ul style={{ width: "fit-content" }} className='flex'>
                {session ? (
                    <li className='empty'>
                        <Link href="#" onClick={handleSignOut}>Sign Out</Link>
                    </li>
                ) : (
                    <li className='empty'>
                        <Link href="/signin">Sign In</Link>
                    </li>
                )}
                <li className='empty'>
                    <Link href="/profile">My Profile</Link>
                </li>
            </ul>
        </nav>
    )
}
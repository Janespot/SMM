'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallback() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      const { error } = await supabase.auth.getSession()

      // Optional: refresh the session from URL fragment
      await supabase.auth.getSession()

      // You can also fetch the session explicitly from the URL if needed
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        router.replace('/')
      } else {
        console.error(error)
        router.replace('/signin')
      }
    }

    handleAuth()
  }, [router])

  return <p className='text-white font-bold'>Signing you in...</p>
}
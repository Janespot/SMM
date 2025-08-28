import "@/assets/styles.css";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import platforms from "@/assets/json/social-media.json";
import UserProfile from "@/components/site/user/Profile";
import { redirect } from "next/navigation";

export default async function MyProfile() {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    if(!session) redirect("/signin");

    const userId = session.user.id;
    
    const { data: profileData, error: profileError } = await supabase
    .from("myprofile")
    .select(`
        *,
        sociallinks: sociallinks (*)
    `)
    .eq("user_id", userId);

    return (
        <UserProfile profileData={profileData} owner={true} />
    )
}
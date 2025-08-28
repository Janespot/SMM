import "@/assets/styles.css";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import platforms from "@/assets/json/social-media.json";
import UserProfile from "@/components/site/user/Profile";

type Props = {
    params: {
        id: string
    }
};

export default async function Home({ params }: Props) {
    const {id} = params;
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    const userId = session?.user.id;
    
    const { data: profileData, error: profileError } = await supabase
    .from("myprofile")
    .select(`
        *,
        sociallinks: sociallinks (*)
    `)
    .eq("id", id);

    let owner = false;

    if(profileData && profileData[0]?.user_id == userId) owner = true;

    const platformMap = new Map(platforms.map(({ value, label }) => [value, label]));

    return (
        <UserProfile profileData={profileData} owner={owner} />
    )
}
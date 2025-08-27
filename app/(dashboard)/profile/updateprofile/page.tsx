import UpdateProfile from "@/components/profile/Update";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddProfileLinks() {
    const supabase = createServerComponentClient({ cookies })
    
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    if(!session) redirect("/signin");

    const userId = session.user.id;

    const { data: profileData, error: profileError } = await supabase
    .from("myprofile")
    .select("*")
    .eq("user_id", userId)
    .single();

    const { data: socialData, error: socialError } = await supabase
    .from("sociallinks")
    .select("*")
    .eq("user_id", userId)

    // console.log("pf data1",profileData, socialData);

    return <UpdateProfile initialDataProfile={profileData} initialDataSocial={socialData} />
}
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function POST(req:Request, res: NextResponse) {
    try {
        const supabase = await createServerComponentClient({ cookies });

        const {
            data: { session },
            error,
        } = await supabase.auth.getSession();

        if (error || !session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = session.user.id;

        const profiledata = await req.json();
        const myProfileData = {...profiledata.profile, user_id: userId};
        
        const { data: profile, error: profileError } = await supabase
        .from('myprofile')
        .insert([myProfileData])
        .select()
        
        const mySocialData = profiledata.sociallinks.map((link: any) => ({
            ...link,
            user_id: userId,
        }))
        const { data: social, error: socialError } = await supabase
        .from('sociallinks')
        .insert(mySocialData)
        .select()

        
        if (profileError || socialError) {
            console.error("Insert error:", { profileError, socialError });
            return NextResponse.json(
                { error: 'Failed to insert profile or social links' },
                { status: 500 }
            );
        }

        return NextResponse.json({ profile, social });
    } catch(error) {
        console.error("Error: ", error);

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
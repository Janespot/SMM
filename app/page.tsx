import "@/assets/styles.css";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import platforms from "@/assets/json/social-media.json";
import Homepage from "@/components/site/Homepage";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const { data: profileData, error: profileError } = await supabase
  .from("myprofile")
  .select(`
    *,
    sociallinks: sociallinks (*)
  `);

const platformMap = new Map(platforms.map(({ value, label }) => [value, label]));

  return (
    <Homepage profileData={profileData} platformMap={platformMap} />
  )
}
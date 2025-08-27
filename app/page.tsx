import "@/assets/styles.css";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import platforms from "@/assets/json/social-media.json";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/signin') // redirect if not logged in
  }

  const { data: profileData, error: profileError } = await supabase
  .from("myprofile")
  .select(`
    *,
    sociallinks: sociallinks (*)
  `);

const platformMap = new Map(platforms.map(({ value, label }) => [value, label]));

  return (
  <main>
    {profileData?.map(data => (
      <>
        <div>
          <img src="/avatar-jessica.jpeg" alt="profile picture" />
        </div>

        <h1>
          {data.username}
        </h1>

        <h2>
          {data.city}{data.city && data.country && ", "}{data.country}
        </h2>

        <p>
          {'"'}{data.about}{'"'}
        </p>

        <ul className="grid grid-rows-5 gap-2 min-h-[10rem]">
          {data.sociallinks.filter((a: any) => !a.privacy).slice(0, 5).map((link: any) => {  
            const platformLabel = platformMap.get(link.platform) || link.platform;
            return (
              <li key={link.id}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {platformLabel}
                </a>
              </li>
          )})}

          {/* Fill empty rows to maintain height */}
          {Array.from({
            length: 5 - data.sociallinks.filter((a: any) => !a.privacy).slice(0, 5).length,
          }).map((_, i) => (
            <li
              key={`empty-${i}`}
              className="empty text-gray-400 text-center italic bg-[#000] !hover:bg-[#000] rounded p-2 border border-dashed border-gray-200"
              aria-hidden="true"
              style={{ cursor: "not-allowed" }}
            >
              No link
            </li>
          ))}
        </ul>
      </>
    ))}
  </main>
  )
}
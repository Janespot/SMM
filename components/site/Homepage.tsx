export default function Homepage({ profileData, platformMap }: any) {
    return (
        <div className="w-full container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" style={{ placeItems: "center" }}>
            {profileData?.map((data: any) => (
                <main>
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
                            )
                        })}

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
                </main>
            ))}
        </div>
    )
}
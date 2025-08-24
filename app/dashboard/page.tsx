import App from "@/components/dashboard/app";

export default function Home() {
  const mediaData = [
    {
        media: "YouTube",
        views: "720.07",
        percent: "10.7",
        logo: "youtube.png",
        more: "7026"
    },
    {
        media: "Instagram",
        views: "720.07",
        percent: "10.7",
        logo: "instagram.png",
        more: "7026"
    },
    {
        media: "Facebook",
        views: "720.07",
        percent: "10.7",
        logo: "facebook.png",
        more: "7026"
    },
    {
        media: "Twitter",
        views: "720.07",
        percent: "10.7",
        logo: "twitter.png",
        more: "7026"
    }
  ];

  const followerData = {
    location: {
      India: {
        name: "India",
        views: 170512
      },
      "United States": {
        name: "United States",
        views: 101321
      },
      Singapore: {
        name: "Singapore",
        views: 84905
      },
      Japan: {
        name: "Japan",
        views: 42437
      },
      France: {
        name: "France",
        views: 31012
      },
      Kenya: {
        name: "Kenya",
        views: 92801
      }
    }
  };

  const insights = [
    {
      name: "Accounts Reached",
      val: "126,768",
      av: 35,
      active: "+27"
    },
    {
      name: "Accounts Engaged",
      val: "23,890",
      av: 78,
      active: "-1.37"
    },
    {
      name: "Followers",
      val: "+124",
      av: 56,
      active: "+2.15"
    },
    {
      name: "Profile Viewers",
      val: "+1,009",
      av: 37,
      active: "-3.15"
    }
  ];

  return (
    <App mediaData={mediaData} followerData={followerData} insights={insights} />
  )
}
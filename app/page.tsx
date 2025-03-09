import App from "@/app/dashboard/app";

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

  console.log(Object.values(followerData.location));

  return (
    <App mediaData={mediaData} followerData={followerData} />
  )
}
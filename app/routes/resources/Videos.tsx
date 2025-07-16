import React from "react";
import Container from "~/components/Container";
import Header from "~/components/Header";
import VideoPlayer from "~/components/VideoPlayer";

export const resourceVideos = [
  {
    id: "res-video-01",
    title: "How to Plant a Tree (Step-by-Step)",
    youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "res-video-02",
    title: "Impact of Urban Greening",
    youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "res-video-03",
    title: "Impact of Urban Greening",
    youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "res-video-04",
    title: "Impact of Urban Greening",
    youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Videos() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Educational videos"}
        description={
          "Educational videos, campaign documentaries, or how-to content."
        }
        align="l"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {resourceVideos.map((item) => (
          <VideoPlayer
            key={item.id}
            data={{
              title: "IAC Patrons Foundation - Intro Video",
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            }}
            className="w-full"
          />
        ))}
      </div>
    </Container>
  );
}

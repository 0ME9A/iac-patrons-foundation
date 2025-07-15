interface PropsInt {
  data: {
    title: string;
    videoUrl: string;
  };
  className?: string;
}

export default function VideoPlayer({ data, className }: PropsInt) {
  return (
    <div
      className={`aspect-video max-w-screen-lg mx-auto rounded-3xl overflow-hidden shadow-lg ${
        className || ""
      }`}
    >
      <iframe
        src={data.videoUrl}
        title={data.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

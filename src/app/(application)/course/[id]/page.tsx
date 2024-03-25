import Comments from "@/components/comments";
import VideoPlayer from "@/components/video";
import Video from "@/components/video";
import VideoCaption from "@/components/video_caption";

export default function Course() {
  return (
    <main className="container p-16 pt-28 flex gap-6 max-[1180px]:flex-col max-[1180px]:px-8 max-[430px]:px-4">
      <div className="flex-1 items-end gap-6  flex-col flex max-[1180px]:items-center">
        <VideoPlayer />
        <Comments />
      </div>
      <div className="min-w-[300px] max-[1180px]:hidden">
        <VideoCaption />
      </div>
    </main>
  );
}

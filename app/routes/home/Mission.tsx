import { GiEarthAsiaOceania } from "react-icons/gi";
import { IoPlayCircle } from "react-icons/io5";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Mission() {
  return (
    <div className="w-full bg-fresh-leaf-20">
      <Container className="space-y-10">
        <Header
          id="#mission"
          icon={<GiEarthAsiaOceania />}
          title={"Our Mission"}
          description={`We are committed to creating a healthier planet through large-scale
            tree plantation drives, environmental education, and community-led
            green initiatives. Every tree planted is a promise for a better
            tomorrow.`}
            align="c"
        />

        <div className="aspect-video max-w-screen-lg mx-auto rounded-full bg-forest-green flex items-center justify-center relative overflow-hidden group">
          <img
            src="https://plus.unsplash.com/premium_photo-1682088332011-4f99fc50b921?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-full object-cover absolute group-hover:scale-110 duration-300"
          />
          <div className="absolute size-full bg-black/25" />
          <div className="relative">
            <span className="absolute size-full bg-fresh-leaf animate-ping rounded-full" />
            <span className="text-6xl relative text-fresh-leaf z-[2]">
              <IoPlayCircle />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

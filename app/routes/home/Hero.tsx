import { impactStats } from "~/data/stats";
import { Link } from "react-router";
import ImpactStatusCard from "~/components/cards/ImpactStatusCard";
import Container from "~/components/Container";

const imgSrc = [
  "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
];

export function Hero() {
  return (
    <div className="w-full relative bg-green-900">
      <Container className="relative z-10 text-white py-32 xl:py-40">
        <header className="flex flex-col gap-4 items-center">
          <div className="p-1 bg-fresh-leaf-40 w-fit rounded-full flex items-center">
            <div className="flex items-center">
              {imgSrc.map((item, i) => (
                <img
                  key={"volunteer-" + i}
                  src={item}
                  alt="Volunteer profile photo"
                  className={`size-8 object-cover rounded-full ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                />
              ))}
            </div>
            <span className="text-xs px-4">1.5k people has joined us</span>
          </div>
          <h1 className="text-[7vw] lg:text-[5rem] leading-[7vw] lg:leading-[5rem] font-playfair font-bold">
            Let’s Grow a Greener <br /> Tomorrow, Together
          </h1>
          <p className="sm:text-lg max-w-screen-sm text-center text-misty-white">
            Join IAC Patrons Foundation in planting trees, restoring
            biodiversity, and building a sustainable, greener future.
          </p>

          <div className="flex gap-4">
            <Link
              to={"/contact"}
              className="px-6 py-2 bg-fresh-leaf-40 border-2 border-fresh-leaf text-white rounded-full shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf"
            >
              Plant a tree
            </Link>
            <Link
              to={"/volunteer"}
              className="px-6 py-2 bg-green-900/20 border-2 border-fresh-leaf text-white rounded-full duration-300 transition-all shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf"
            >
              Volunteer
            </Link>
          </div>
        </header>
      </Container>
      <div className="bg-fresh-leaf">
        <div className="container mx-auto p-2 sm:p-4 grid grid-cols-2 md:grid-cols-4 text-sm md:divide-x divide-green-900/20">
          {impactStats.map((item) => (
            <ImpactStatusCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

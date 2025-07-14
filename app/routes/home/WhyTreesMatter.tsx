import type { WhyTreesMatterInt } from "~/interfaces/data";
import { GiFruitTree } from "react-icons/gi";
import WhyTreesMatterCard from "~/components/cards/WhyTreesMatterCard";
import Container from "~/components/Container";

const data: WhyTreesMatterInt[] = [
  {
    id: "why-01",
    title: "Clean Air",
    desc: "Trees absorb pollutants and release oxygen, improving the air quality in our communities and reducing respiratory issues.",
    img: {
      src: "https://media.istockphoto.com/id/1499689170/photo/hand-holding-a-magnifying-glass-to-check-the-good-air-quality-and-clean-outdoor-air-quality.jpg?s=1024x1024&w=is&k=20&c=qg4bpC09M-Gl5JCJ44cIfj1aKZPferMZseLD4aRlzj0=",
      alt: "Tree canopy filtering polluted air",
    },
  },
  {
    id: "why-02",
    title: "Climate Regulation",
    desc: "Trees act as carbon sinks, helping to stabilize the climate by absorbing greenhouse gases and reducing global warming.",
    img: {
      src: "https://plus.unsplash.com/premium_photo-1741881052053-1405e41f662d?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Lush green forest balancing climate",
    },
  },
  {
    id: "why-03",
    title: "Biodiversity Support",
    desc: "Forests provide shelter and food for over 80% of the world’s terrestrial species, sustaining ecosystems and wildlife.",
    img: {
      src: "https://images.unsplash.com/photo-1591211635541-6392917b65cd?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Various animals living in a forest",
    },
  },
  {
    id: "why-04",
    title: "Soil Conservation",
    desc: "Tree roots bind the soil, preventing erosion, improving fertility, and helping in sustainable agriculture.",
    img: {
      src: "https://images.unsplash.com/photo-1743912021345-f84ef927617d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Roots holding soil on a slope",
    },
  },
  {
    id: "why-05",
    title: "Water Cycle Balance",
    desc: "Trees help maintain the water cycle by absorbing and releasing water, ensuring groundwater recharge and reducing floods.",
    img: {
      src: "https://images.unsplash.com/photo-1561063434-d8c346bfb501?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Tree near a stream balancing water flow",
    },
  },
];

export default function WhyTreesMatter() {
  return (
    <Container>
      <div className="space-y-10">
        <header className="flex flex-col gap-6 items-center">
          <div className="w-14 h-14 rounded-full bg-fresh-leaf flex items-center justify-center shadow-md shadow-fresh-leaf/30">
            <span className="text-white text-xl">
              <GiFruitTree />
            </span>
          </div>
          <h2 className="text-4xl font-playfair font-bold text-green-900 dark:text-white">
            Why Trees Matter
          </h2>
          <p className="text-base sm:text-lg text-charcoal dark:text-misty-white-80 text-center leading-relaxed max-w-prose">
            Trees are essential to life on Earth. They reduce air pollution,
            support biodiversity, prevent soil erosion, and help combat climate
            change. Planting trees is one of the simplest, most powerful ways to
            protect our planet for future generations.
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {data.map((item) => (
            <WhyTreesMatterCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}

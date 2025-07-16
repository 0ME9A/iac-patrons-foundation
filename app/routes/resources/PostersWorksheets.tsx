import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import Header from "~/components/Header";

export const resourcePrintables = [
  {
    id: "res-poster-01",
    title: "Photosynthesis Explained (Poster)",
    desc: "A vibrant classroom poster explaining the science of how trees help the planet.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1668051041905-9cc2cfe2ecd8?q=80&w=376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "res-sheet-01",
    title: "My Tree Journal (Worksheet)",
    desc: "A student-friendly worksheet to document the growth and impact of a tree they plant or adopt.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663091116913-9e49bdb5c69b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function PostersWorksheets() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Posters and Worksheets"}
        description={"Visuals and activities for awareness and learning."}
        align="l"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {resourcePrintables.map((item) => (
          <figure className="rounded-3xl overflow-hidden relative group">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full aspect-square object-cover group-hover:scale-110 duration-300 transition-all"
            />
            <figcaption className="absolute w-full h-fit p-10 -bottom-full group-hover:bottom-0 bg-fresh-leaf-60 space-y-2 duration-300 transition-all backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-green-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text text-charcoal dark:text-misty-white">
                {item.desc}
              </p>
              <LinkBtn
                to={item.imageUrl}
                download
                className="block w-fit !text-black mt-4"
              >
                Download poster
              </LinkBtn>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}

import { GiPlantSeed } from "react-icons/gi";
import { Link } from "react-router";
import Container from "~/components/Container";
import Header from "~/components/Header";
import LinkBtn from "~/components/LinkBtn";

export default function EnvironmentalMission() {
  return (
    <Container>
      <div>
        <Header
          icon={<GiPlantSeed />}
          title={"Our Environmental Mission"}
          subTitle={`We believe environmental responsibility is not a choice — it’s a
            duty.`}
          description={`Our mission is to inspire collective action for tree plantation,
            ecological restoration, and climate resilience by connecting
            individuals, schools, corporates, and communities with meaningful
            green projects.`}
          align="c"
        />
        <div className="pt-6 w-fit mx-auto">
          <LinkBtn to={"/mission"}>{"Read more"}</LinkBtn>
        </div>
      </div>
    </Container>
  );
}

{
  /* <div className="hidden sm:flex-1 relative">
  <img
    src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Tree planting activity"
    className="w-[40%] h-full rounded-full object-cover mx-auto absolute right-0 bottom-0 scale-50 origin-bottom-left ring-4 ring-offset-8 ring-fresh-leaf"
  />
  <img
    src="https://plus.unsplash.com/premium_photo-1679516402867-ff7b188782e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Tree planting activity"
    className="w-[40%] h-full rounded-full object-cover mx-auto absolute left-0 top-0 scale-50 origin-top-right ring-4 ring-offset-8 ring-fresh-leaf"
  />
  <img
    src="https://plus.unsplash.com/premium_photo-1725404415711-0f50c7dc0012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Tree planting activity"
    className="w-[40%] h-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
  />
</div>; */
}

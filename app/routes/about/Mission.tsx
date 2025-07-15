import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Mission() {
  return (
    <Container className="!py-10 grid md:grid-cols-2 lg:gap-10 items-center">
      <Header
        title="Our Environmental Mission"
        description="We aim to combat climate change, deforestation, and pollution by empowering communities to plant and nurture trees. Through awareness campaigns, educational programs, and citizen-led action, we’re turning everyday people into eco-guardians."
        align="c"
      />
      <div className="relative size-[60%] mx-auto md:size-full aspect-square md:scale-75 md:order-first">
        <img
          src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute right-0 bottom-0 scale-50 origin-bottom-right ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1679516402867-ff7b188782e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute left-0 top-0 scale-50 origin-top-left ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1725404415711-0f50c7dc0012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
        />
      </div>
    </Container>
  );
}

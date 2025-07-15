import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Vision() {
  return (
    <Container className="!py-10 grid md:grid-cols-2 lg:gap-10 items-center">
      <Header
        title="Our Vision"
        description="We imagine a future where every neighborhood thrives with green cover, biodiversity flourishes, and communities take pride in protecting their environment. True change starts at the grassroots — one tree, one family, one village at a time."
        align="c"
      />
      <div className="relative size-[60%] mx-auto md:size-full aspect-square md:scale-75">
        <img
          src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute right-0 bottom-0 scale-50 origin-bottom-right ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://images.unsplash.com/photo-1626257673566-df7fb7709f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute left-0 top-0 scale-50 origin-top-left ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://images.unsplash.com/photo-1625746924575-19fd6e261e49?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
        />
      </div>
    </Container>
  );
}

import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Journey() {
  return (
    <Container className="!py-10 grid md:grid-cols-2 lg:gap-10 items-center">
      <Header
        title="Our Journey"
        description="What started as a simple tree-planting initiative in a schoolyard has grown into a nationwide green movement. From urban parks to rural farmland, we’ve collaborated with students, farmers, civic authorities, and volunteers to plant thousands of trees and sow the seeds of environmental consciousness."
        align="c"
      />
      <div className="relative size-[60%] mx-auto md:size-full aspect-square md:scale-75 md:order-first">
        <img
          src="https://plus.unsplash.com/premium_photo-1661908873366-e9ca6f3c7fa7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute right-0 bottom-0 scale-50 origin-bottom-right ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1663127648312-76685ee5b15a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute left-0 top-0 scale-50 origin-top-left ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="https://images.unsplash.com/photo-1523975864490-174dd4d9a41e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tree planting activity"
          className="size-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
        />
      </div>
    </Container>
  );
}

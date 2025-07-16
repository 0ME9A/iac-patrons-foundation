import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "routes/about/index.tsx"),
  route("mission", "routes/mission/index.tsx"),
  route("team", "routes/team.tsx"),
  route("volunteer", "routes/volunteer/index.tsx"),
  route("donate", "routes/donate/index.tsx"),
  route("contact", "routes/contact.tsx"),
  route("blogs", "routes/blogs/index.tsx"),
  route("campaigns", "routes/campaigns/index.tsx"),
  route("impact-report", "routes/impact-report/index.tsx"),
  route("resources", "routes/resources/index.tsx"),
] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "routes/about/index.tsx"),
  route("mission", "routes/mission/index.tsx"),
  route("team", "routes/team.tsx"),
  route("volunteer", "routes/volunteer/index.tsx"),
  route("donate", "routes/donate/index.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;

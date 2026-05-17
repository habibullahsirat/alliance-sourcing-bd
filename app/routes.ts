import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("../app/routes/home.tsx"),
    // route("login", "../app/routes/login.tsx"),
    // route("register", "../app/routes/register.tsx"),
  ]),
] satisfies RouteConfig;

import Demo from "../pages/Demo";
import Index from "../pages/Index";
import Login from "../pages/auth/Login";

let routes = [
  {
    path: "/",
    component: Index,
    layout: "main",
  },
  {
    path: "/demo",
    component: Demo,
    layout: "main",
  },
  {
    path: "/login",
    component: Login,
    layout: "auth",
  },
];

export default routes;

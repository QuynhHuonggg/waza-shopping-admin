
import Dashboard from "./views/Dashboard/Dashboard";
import User from "./views/User/User";
import Order from "./views/Order/Order";
import Shop from "./views/Shop/Shop";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/shop",
    name: "Shops",
    icon: "pe-7s-shopbag",
    component: Shop,
    layout: "/admin"
  },
  {
    path: "/order",
    name: "Orders",
    icon: "pe-7s-note2",
    component: Order,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    icon: "pe-7s-user",
    component: User,
    layout: "/admin"
  },
   
];

export default dashboardRoutes;

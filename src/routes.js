/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Role from "views/Role.js";
import Pending from "views/Pending.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Approved from "views/Approved";
import tickimg from "./assets/img/tick.svg";
import Rejected from "views/Rejected";
import Collected_Hostel from "views/Collected2";
import Collector from "views/Collector";
import Collected from "views/Collected";
import Donor from "views/HighestDonor";
import Donated from "views/Donated";

const dashboardRoutes = [
  {
    path: "/pending",
    name: "Pending Items",
    icon: "nc-icon nc-notes",
    component: Pending,
    layout: "/admin",
  },
  {
    path: "/approved",
    name: "Approved Items",
    icon: "nc-icon nc-check-2",
    component: Approved,
    layout: "/admin",
  },
  {
    path: "/rejected",
    name: "Rejected Items",
    icon: "nc-icon nc-simple-remove",
    component: Rejected,
    layout: "/admin",
  },
  {
    path: "/hostel",
    name: "Collected Hostel",
    icon: "nc-icon nc-paper-2",
    component: Collected_Hostel,
    layout: "/admin",
  },
  {
    path: "/collected",
    name: "Collected Items",
    icon: "nc-icon nc-planet",
    component: Collected,
    layout: "/admin",
  },
  {
    path: "/donated",
    name: "Donated Items",
    icon: "nc-icon nc-air-baloon",
    component: Donated,
    layout: "/admin",
  },
  {
    path: "/role",
    name: "Role",
    icon: "nc-icon nc-circle-09",
    component: Role,
    layout: "/admin",
  },
  {
    path: "/collector",
    name: "Collectors",
    icon: "nc-icon nc-single-02",
    component: Collector,
    layout: "/admin",
  },
  {
    path: "/donor",
    name: "Donors",
    icon: "nc-icon nc-tap-01",
    component: Donor,
    layout: "/admin",
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;

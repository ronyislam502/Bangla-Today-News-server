import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { EditorRoutes } from "../modules/editor/editor.route";
import { LocationRoutes } from "../modules/location/loacation.route";
// import { ReviewRoutes } from "../modules/review/review.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/editors",
    route: EditorRoutes,
  },
  {
    path: "/locations",
    route: LocationRoutes,
  },
  // {
  //   path: "/reviews",
  //   route: ReviewRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { obituaryRoutes } from "./obituary.routes";
import { personRoutes } from "./person.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/person", personRoutes);
router.use("/obituary", obituaryRoutes);
router.use("/users", usersRoutes);
router.use("/sessions", authenticateRoutes);

export { router };

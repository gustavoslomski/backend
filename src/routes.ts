import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { CreateFeedbackController } from "./controllers/CreateFeedbackController";
import { GetUserFeedbacksController } from "./controllers/GetUserFeedbacksController";
import { GetFeedbackController } from "./controllers/GetFeedbackController";
import { GetUsersController } from "./controllers/GetUsersController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { UpdateFeedbackController } from "./controllers/UpdateFeedbackController";
import { GetUserFeedbackForOtherController } from "./controllers/GetUserFeedbackForOtherController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

router.get("/feedback", ensureAuthenticated, new GetFeedbackController().handle)
router.post("/feedback", ensureAuthenticated, new CreateFeedbackController().handle)
router.put("/feedback", ensureAuthenticated, new UpdateFeedbackController().handle)

router.get("/listUsers", ensureAuthenticated, new GetUsersController().handle)

router.get("/myFeedbacks", ensureAuthenticated, new GetUserFeedbacksController().handle)
router.get("/myFeedbackForOther", ensureAuthenticated, new GetUserFeedbackForOtherController().handle)


export { router }
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import usersRouter from "./routes/users.router.js";
import sessionsRouter from "./routes/sessions.router.js";

initializePassport();
app.use(passport.initialize());
app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);

import { googleAuth } from "@hono/oauth-providers/google";
import { Hono } from "hono";
import { GOOGLE_ID, GOOGLE_REDIRECT_URL, GOOGLE_SECRET } from "../_Config/Environment";
import { googleRedirect, googleAuth as googleAuthentication } from "./auth.service";

const authRoutes = new Hono()

authRoutes.use(
  '/google/callback',
  googleAuth({
    client_id: GOOGLE_ID,
    client_secret: GOOGLE_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URL,
    scope: ['openid', 'email', 'profile'],
  })
)
authRoutes.get("/google",googleRedirect)
authRoutes.get("/google/callback",googleAuthentication)


export default authRoutes
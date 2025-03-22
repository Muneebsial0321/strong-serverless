import { GoogleUser } from "@hono/oauth-providers/google";
import { Context } from "hono";

const googleRedirect = (c: Context) => {
    return c.redirect("/google/callback")
}

const googleAuth = (c: Context) => {
    const user:GoogleUser = c.get('user-google')
    return c.json(user)
}

export { googleAuth, googleRedirect }
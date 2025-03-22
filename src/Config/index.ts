import { env } from "cloudflare:workers"

export const PORT = env.PORT! || ""
export const ENV_HEALTH = env.ENV_HEALTH
export const GOOGLE_ID = env.GOOGLE_ID
export const GOOGLE_SECRET = env.GOOGLE_SECRET
export const GOOGLE_REDIRECT_URL = env.GOOGLE_REDIRECT_URL
export const MONGODB_URL = env.MONGODB_URL
export const BACKEND_URL = env.BACKEND_URL
export const FRONTEND_URL = env.FRONTEND_URL
export const JWT_SECRET = env.JWT_SECRET

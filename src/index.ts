import { Hono } from 'hono'
import authRoutes from './auth/auth.controller';
import { ENV_HEALTH } from './_Config/Environment';
import { logger } from 'hono/logger';

const app = new Hono()

// Health Check
app.use(logger())
app.get('/', (c) => {
  return c.text(`hello form hono , env health: ${ENV_HEALTH}`);
});

// Routes
app.route("/",authRoutes)


export default app

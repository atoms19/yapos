import type { MiddlewareHandler } from "hono";
import { createDB } from "../lib/db.js";


export const drizzleMiddleware:MiddlewareHandler = async (c,next)=>{
   c.set("db",createDB());
   next()
}

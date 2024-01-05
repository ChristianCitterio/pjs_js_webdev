import cors from "cors"
import sqlite from 'better-sqlite3';

const env = process.env 

export const corsOptions: cors.CorsOptions = {
    origin: env.ALLOWED_HOSTS || ["*", ],
};
